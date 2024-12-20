import * as React from "react";
import { useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { mockBarData } from "../data/mockData";
import { tokens } from "../theme";

type BarChartPropsType = {
  isDashboard?: boolean;
};

const BarCharts = ({ isDashboard = false }: BarChartPropsType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartSetting = {
    legend: isDashboard ? { hidden: true } : undefined,

    width: isDashboard ? 320 : 1060,
    height: isDashboard ? 240 : 445,

    sx: {
      [`.${axisClasses.label}`]: {
        transform: "translate(-10px, 0)",
      },
    },
  };

  return (
    <BarChart
      dataset={mockBarData}
      xAxis={[{ scaleType: "band", dataKey: "country" }]}
      series={[
        {
          dataKey: "burger",
          label: "Burger",
          color: colors.greenAccent[500],
          type: "bar",
        },
        {
          dataKey: "kebab",
          label: "Kebab",
          color: colors.redAccent[500],
          type: "bar",
        },
        {
          dataKey: "donut",
          label: "Donut",
          color: colors.blueAccent[500],
          type: "bar",
        },
        {
          dataKey: "hot dog",
          label: "Hot Dog",
          color: colors.grey[100],
          type: "bar",
        },
      ]}
      {...chartSetting}
    />
  );
};

export default BarCharts;
