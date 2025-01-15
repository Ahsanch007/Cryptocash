import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const Tokenomics = () => {
    const data = {
        labels: [
            'Presale',
            'Liquidity Pools and Exchange Listings',
            'Ecosystem Incentives',
            'Team and Advisors',
            'Development and Operations Costs',
            'Marketing Machine',
            'Investment Fund',
            'Community and Partnerships',
        ],
        datasets: [
            {
                data: [20, 20, 15, 10, 10, 10, 10, 5],
                backgroundColor: [
                    '#F69040', // Orange
                    '#4BC0C0', // Teal
                    '#FF6384', // Pink
                    '#36A2EB', // Blue
                    '#9966FF', // Purple
                    '#FFCE56', // Yellow
                    '#A2D9CE', // Mint
                    '#C39BD3', // Lavender
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
                enabled: false,
            },
            legend: {
                display: false,
            },
        },
    };

    const drawCustomLabels = (chart) => {
        const { ctx, chartArea, data } = chart;
        if (!chartArea) return;

        const { width, height } = chartArea;
        const meta = chart.getDatasetMeta(0);
        const placedLabels = []; // To keep track of already placed labels and avoid overlaps

        meta.data.forEach((arc, index) => {
            const dataset = data.datasets[0];
            const value = dataset.data[index];
            const percentage = `${value.toFixed(2)}%`;

            const centerAngle = (arc.startAngle + arc.endAngle) / 2;

            const outerRadius = arc.outerRadius;
            const startX = Math.cos(centerAngle) * (outerRadius - 10) + width / 2;
            const startY = Math.sin(centerAngle) * (outerRadius - 10) + height / 2;

            const lineLength = 15;
            const endX = Math.cos(centerAngle) * (outerRadius + lineLength) + width / 2;
            const endY = Math.sin(centerAngle) * (outerRadius + lineLength) + height / 2;

            const horizontalOffset = 30;
            let labelX = endX < width / 2 ? endX - horizontalOffset : endX + horizontalOffset;

            // Adjust vertical position to prevent overlapping with already placed labels
            let labelY = endY;
            placedLabels.forEach((placedLabel) => {
                if (Math.abs(labelY - placedLabel.y) < 20) {
                    labelY = labelY + (labelY > placedLabel.y ? 20 : -20);
                }
            });

            // Ensure label stays within the canvas bounds
            const padding = 20;
            labelX = Math.max(20, Math.min(labelX, width - 20));
            labelY = Math.max(padding, Math.min(labelY, height - padding));

            // Save the label's position
            placedLabels.push({ x: labelX, y: labelY });

            // Draw the callout line
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = '#666';
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(endX, endY);
            ctx.lineTo(labelX, labelY);
            ctx.stroke();

            // Draw the label and percentage
            const label = data.labels[index];
            ctx.fillStyle = '#000';
            ctx.font = '12px Arial';
            ctx.textAlign = endX < width / 2 ? 'right' : 'left';
            ctx.fillText(label, labelX, labelY - 5);
            ctx.fillText(percentage, labelX, labelY + 15);
        });
    };

    return (
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
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

export default Tokenomics;
