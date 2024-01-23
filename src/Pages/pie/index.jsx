import React from "react";
import { Box } from "@mui/material";
import PieCharts from "../../components/PieChart";
import Header from "../../components/Header";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart showing stats" />
      <Box height="70vh">
        <PieCharts />
      </Box>
    </Box>
  );
};

export default Pie;
