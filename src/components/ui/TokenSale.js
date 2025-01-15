import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const TokenSale = () => {
    const data = {
        labels: [
            'Private Sale',
            'Presale Tier1(Early Access)',
            'Presale Tier2(Main Sale)',
            'Presale Tier3(Final Phase)',
        ],
        datasets: [
            {
                data: [25, 35, 25, 15],
                backgroundColor: [
                    '#F69040', // Orange
                    '#4BC0C0', // Teal
                    '#FF6384', // Pink
                    '#36A2EB', // Blue
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: false, // Disable tooltips since we're customizing labels
            },
            legend: {
                display: false, // Hide default legend
            },
        },
        animation: false,
    };

    const drawCustomLabels = (chart) => {
        const { ctx, chartArea, data } = chart;
        if (!chartArea) return;

        const { width, height } = chartArea;
        const meta = chart.getDatasetMeta(0);

        meta.data.forEach((arc, index) => {
            const dataset = data.datasets[0];
            const value = dataset.data[index];
            const percentage = `${value.toFixed(2)}%`;

            // Get the center angle of the slice
            const centerAngle = (arc.startAngle + arc.endAngle) / 2;

            // Calculate the starting point of the callout line
            const outerRadius = arc.outerRadius;
            const startX = Math.cos(centerAngle) * (outerRadius - 10) + width / 2; // Start inside the pie chart
            const startY = Math.sin(centerAngle) * (outerRadius - 10) + height / 2; // Start inside the pie chart

            // Set the callout line's length and avoid overflowing out of bounds
            const lineLength = 10;
            const endX = Math.cos(centerAngle) * (outerRadius + lineLength) + width / 2;
            const endY = Math.sin(centerAngle) * (outerRadius + lineLength) + height / 2;

            // Adjust label position based on the angle to ensure it stays inside the canvas
            const horizontalOffset = 20;
            let labelX = endX < width / 2 ? endX - horizontalOffset : endX + horizontalOffset;

            // Ensure the label stays within the canvas horizontally
            labelX = Math.max(20, Math.min(labelX, width - 20));

            // Adjust vertical position to avoid clipping
            let labelY = endY;
            const padding = 10; // Add padding to the top and bottom
            if (endY < padding) labelY = padding; // Top padding
            if (endY > height - padding) labelY = height - padding; // Bottom padding

            // Draw the callout line
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = '#666';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw the horizontal segment of the callout line
            ctx.beginPath();
            ctx.moveTo(endX, endY);
            ctx.lineTo(labelX, labelY);
            ctx.stroke();

            // Add the text label (category) and percentage
            const label = data.labels[index];
            ctx.fillStyle = '#000';
            ctx.font = '12px Arial';
            ctx.textAlign = endX < width / 2 ? 'right' : 'left';

            // Adjust the label placement to avoid overlap
            const labelYAdjusted = labelY - 6;
            const percentageYAdjusted = labelY + 12;

            // Draw the label and percentage
            ctx.fillText(label, labelX, labelYAdjusted); // Category label
            ctx.fillText(percentage, labelX, percentageYAdjusted); // Percentage
        });
    };

    return (
        <div className='' style={{ width: '100%', height: '300px', position: 'relative' }}>
            <Pie
                data={data}
                options={options}
                plugins={[
                    {
                        id: 'customLabels',
                        afterDraw: drawCustomLabels,
                    },
                ]}
            />
        </div>
    );
};

export default TokenSale;
``
