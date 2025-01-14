import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
    Tooltip,
    PieLabelRenderProps,
} from 'recharts';

interface Data {
    name: string;
    value: number;
}

const data: Data[] = [
    { name: 'Private Sale', value: 25 },
    { name: 'Presale Tier1 (Early Access)', value: 35 },
    { name: 'Presale Tier2 (Main Sale)', value: 25 },
    { name: 'Presale Tier3 (Final Phase)', value: 15 },
];

const COLORS = ['#F69040', '#4BC0C0', '#FF6384', '#36A2EB'];

// Function to break long labels into multiple lines
const splitLabel = (text: string, maxLineLength: number): string[] => {
    if (text.length <= maxLineLength) return [text];
    const words = text.split(' ');
    const lines: string[] = [];
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
const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent = 0, // Default percent to 0 if it's undefined
    name,
}: PieLabelRenderProps) => {
    const RADIAN = Math.PI / 180;

    // Explicitly convert to number and provide fallback values if undefined
    const radius = (Number(innerRadius) || 0) + (Number(outerRadius) || 0 - Number(innerRadius) || 0) * 1.2; // Adjust label position
    const x = (Number(cx) || 0) + radius * Math.cos(-midAngle * RADIAN);
    const y = (Number(cy) || 0) + radius * Math.sin(-midAngle * RADIAN);

    const lines = splitLabel(name, 20); // Break the label text into lines

    return (
        <text
            x={x}
            y={y}
            fill="black"
            textAnchor={x > (Number(cx) || 0) ? 'start' : 'end'}
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


const TokenSaleRecharts: React.FC = () => {
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

export default TokenSaleRecharts;
