"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "March 2022", value: 20 },
  { name: "April 2022", value: 18 },
  { name: "May 2022", value: 22 },
  { name: "June 2022", value: 25 },
  { name: "July 2022", value: 23 },
  { name: "August 2022", value: 26 },
  { name: "September 2022", value: 28 },
  { name: "October 2022", value: 30 }
];

export function LineChartComponent() {
  return (
    <div className="w-full h-[280px] bg-white rounded-xl shadow-lg shadow-gray-300 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#fbbf24"
            strokeWidth={3}
            dot={{ r: 5, fill: "#f59e0b", strokeWidth: 2, stroke: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
