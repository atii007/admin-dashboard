import React from "react";
import { Box } from "@mui/material";
import SimpleLineChart from "../../components/LineChart";
import Header from "../../components/Header";

const Line = ({ isDashboard = false }) => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart showing stats" />

      <Box
        height="70vh"
        mt="20px"
        border=" 1px solid #e0e0e0"
        border-radius="4px"
      >
        <SimpleLineChart isDashboard={isDashboard} />
      </Box>
    </Box>
  );
};

export default Line;
