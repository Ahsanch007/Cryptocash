import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

const data = [
    { name: 'Presale', value: 20 },
    { name: 'Liquidity Pools and Exchange Listings', value: 20 },
    { name: 'Ecosystem Incentives', value: 15 },
    { name: 'Team and Advisors', value: 10 },
    { name: 'Development and Operations Costs', value: 10 },
    { name: 'Marketing Machine', value: 10 },
    { name: 'Investment Fund', value: 10 },
    { name: 'Community and Partnerships', value: 5 },
];

const COLORS = [
    '#F69040', // Orange
    '#4BC0C0', // Teal
    '#FF6384', // Pink
    '#36A2EB', // Blue
    '#9966FF', // Purple
    '#FFD700', // Gold
    '#8A2BE2', // Violet Blue
    '#FFA07A', // Light Salmon
];

// Function to break long labels into two lines
const splitLabel = (text, maxLineLength) => {
    if (text.length <= maxLineLength) return [text];
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach((word) => {
        if ((currentLine + word).length <= maxLineLength) {
            currentLine += `${word} `;
        } else {
            lines.push(currentLine.trim());
            currentLine = `${word} `;
        }
    });

    if (currentLine) lines.push(currentLine.trim());
    return lines;
};

// Custom label renderer
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2; // Adjust label position
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const lines = splitLabel(name, 20); // Break the label text into lines

    return (
        <text
            x={x}
            y={y}
            fill="black"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            fontSize="12"
        >
            {lines.map((line, index) => (
                <tspan key={index} x={x} dy={index === 0 ? 0 : 14}>
                    {line}
                </tspan>
            ))}
            <tspan x={x} dy={14}>
                {`(${(percent * 100).toFixed(2)}%)`}
            </tspan>
        </text>
    );
};

const TokenomicsRecharts = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={renderCustomLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TokenomicsRecharts;
