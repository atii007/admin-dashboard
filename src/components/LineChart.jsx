import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const aData = [4000, 2298, 6800, 2780, 1890, 2390, 3490];
const bData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const cData = [2800, 8298, 3800, 7800, 3800, 9200, 2000];

const xLabels = [
  "Group A",
  "Group B",
  "Group C",
  "Group D",
  "Group E",
  "Group F",
  "Group G",
];

const SimpleLineChart = () => {
  return (
    <LineChart
      width={800}
      height={450}
      series={[
        { data: aData, label: "av" },
        { data: bData, label: "bv" },
        { data: cData, label: "cv" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
};

export default SimpleLineChart;
