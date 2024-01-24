import * as React from "react";
import { useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { mockBarData } from "../data/mockData";
import { tokens } from "../theme";

const BarCharts = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartSetting = {
    legend: isDashboard ? { hidden: true } : undefined,
    yAxis: [
      {
        label: "Approx. Selling (/day)",
      },
    ],
    width: isDashboard ? 320 : 1000,
    height: isDashboard ? 250 : 450,
    sx: {
      [`.${axisClasses.label}`]: {
        transform: "translate(-10px, 0)",
      },
    },
  };

  console.log("width,", chartSetting.width);

  return (
    <BarChart
      dataset={mockBarData}
      xAxis={[
        { scaleType: "band", dataKey: "country", color: colors.grey[100] },
      ]}
      series={[
        { dataKey: "burger", label: "Burger", color: colors.greenAccent[500] },
        { dataKey: "kebab", label: "Kebab", color: colors.redAccent[500] },
        {
          dataKey: "donut",
          label: "Donut",
          color: colors.blueAccent[500],
        },
        { dataKey: "hot dog", label: "Hot Dog", color: colors.grey[100] },
      ]}
      {...chartSetting}
    />
  );
};

export default BarCharts;
