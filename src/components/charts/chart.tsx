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
  Cell,
} from "recharts";
import { CustomTooltip } from "./customTooltip";
import { data } from "../../utils/chartData.ts";
import { useTranslation } from "react-i18next";

// Wrapper funcional para usar o hook useTranslation
function ChartWithTranslation() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          width={300}
          height={500}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="name"
            stroke="#ffffff"
            scale="point"
            tick={{ textAnchor: "middle", fontSize: 10 }}
            padding={{ left: 50, right: 50 }}
            dy={10}
            tickFormatter={(value) => t(value)}
          />
          <YAxis stroke="#ffffff" />
          <CartesianGrid
            stroke="#cccccc3d"
            strokeDasharray="2"
            vertical={false}
          />
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
              fontSize={18}
              fontWeight="normal"
            />

            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
          <Tooltip content={<CustomTooltip />} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default class Chart extends PureComponent {
  render() {
    return <ChartWithTranslation />;
  }
}
