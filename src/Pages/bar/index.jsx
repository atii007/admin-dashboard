import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarCharts from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart showing stats" />
      <Box height="70vh">
        <BarCharts />
      </Box>
    </Box>
  );
};

export default Bar;
