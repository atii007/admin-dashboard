import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { mockLineData } from "../data/mockData";

const xLabels = mockLineData.map((item) => item.data.map((axis) => axis.x));
const yLabels = mockLineData.map((item) => item.data.map((axis) => axis.y));
const id = mockLineData.map((item) => item.id);
const colors = mockLineData.map((item) => item.color);

const SimpleLineChart = ({ isDashboard = false }) => {
  return (
    <LineChart
      width={isDashboard ? 700 : 950}
      height={isDashboard ? 250 : 400}
      series={yLabels.map((item, index) => {
        return { data: item, label: id[index], color: colors[index] };
      })}
      xAxis={[{ scaleType: "point", data: xLabels[0] }]}
    />
  );
};

export default SimpleLineChart;
