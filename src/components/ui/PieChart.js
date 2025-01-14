import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const PieChartWithLabels = () => {
    const data = {
        labels: [
            'Mobile Ad Platform',
            'Bounty',
            'Platform Integration',
            'Token Sale',
            'Operational Overhead',
        ],
        datasets: [
            {
                data: [24.25, 24.25, 16.25, 25.1, 10.15],
                backgroundColor: [
                    '#F69040', // Orange
                    '#4BC0C0', // Teal
                    '#FF6384', // Pink
                    '#36A2EB', // Blue
                    '#9966FF', // Purple
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
            const startX = Math.cos(centerAngle) * outerRadius + width / 2;
            const startY = Math.sin(centerAngle) * outerRadius + height / 2;

            // Calculate the end point of the straight line (extension)
            const lineLength = 15; // Length of the first segment
            const endX = Math.cos(centerAngle) * (outerRadius + lineLength) + width / 2;
            const endY = Math.sin(centerAngle) * (outerRadius + lineLength) + height / 2;

            // Determine the alignment for the horizontal segment
            const horizontalOffset = 30; // Horizontal offset for the label line
            const labelX = endX < width / 2 ? endX - horizontalOffset : endX + horizontalOffset;
            const labelY = endY;

            // Draw the straight segment of the callout line
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
            ctx.fillText(label, labelX, labelY - 5); // Category label
            ctx.fillText(percentage, labelX, labelY + 12); // Percentage
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

export default PieChartWithLabels;
