import React, { useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

type Props = {
    data: any;
    xAxis: string;
    dataKey: string;
    title: string;
};

const SimpleLineChart = ({ data, xAxis, dataKey, title }: Props) => {
    return (
        <ResponsiveContainer width={"80%"} height={333}>
            <LineChart
                data={data}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <XAxis dataKey={xAxis} tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip
                    cursor={{ stroke: "black", strokeWidth: 1 }}
                    formatter={(value, name, props) => {
                        return [
                            `${name}: ${value}`,
                            props.payload.name,
                        ];
                    }}
                />
                <Legend />
                <text x={100} y={10} fontSize={18} fill="#333">
                    {title}
                </text>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default SimpleLineChart;