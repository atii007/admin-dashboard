import React from "react";
import { Box } from "@mui/material";
import PieCharts from "../../components/PieChart";
import Header from "../../components/Header";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart showing stats" />
      <Box
        height="70vh"
        mt="20px"
        border=" 1px solid #e0e0e0"
        border-radius="4px"
      >
        <PieCharts />
      </Box>
    </Box>
  );
};

export default Pie;
