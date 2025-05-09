import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";
import { CustomTooltip } from "./customTooltip";
import { data } from "../../utils/chartData.ts";

export default class Chart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8";

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          width={300}
          height={500}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="name"
            stroke="#ffffff"
            scale="point"
            tick={{ textAnchor: "middle", fontSize: 15 }}
            padding={{ left: 50, right: 50 }}
            dy={10}
          />
          <YAxis stroke="#ffffff" />
          <CartesianGrid stroke="#cccccc3d" strokeDasharray="0" />
          <Bar
            dataKey="quantidade"
            barSize={50}
            fill="#34d6ff"
            background={{ fill: "transparent" }}
            style={{
              filter: "drop-shadow(10px -5px 2px rgba(0, 0, 0, 0.082))",
            }}
            radius={[3, 3, 0, 0]}
          >
            <LabelList
              dataKey="quantidade"
              position="top"
              fill="#ffffff"
              fontSize={14}
              fontWeight="bold"
            />
          </Bar>
          <Tooltip content={<CustomTooltip />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
