import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarCharts from "../../components/BarChart";

const Bar = ({ isDashboard = false }) => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar sChart showing stats" />
      <Box height="70vh" mt="20px">
        <BarCharts isDashboard={isDashboard} />
      </Box>
    </Box>
  );
};

export default Bar;
