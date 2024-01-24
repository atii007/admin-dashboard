import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { mockPieData } from "../data/mockData";

const data = mockPieData;

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const PieCharts = ({ isDashboard = false }) => {
  const sizing = {
    margin: { right: 5 },
    width: 1000,
    height: 400,
    legend: isDashboard ? { hidden: true } : undefined,
  };

  return (
    <PieChart
      series={[
        {
          outerRadius: 200,
          innerRadius: 90,
          paddingAngle: 0,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 18,
        },
      }}
      {...sizing}
    />
  );
};

export default PieCharts;
