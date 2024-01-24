import React from "react";
import { Box, useTheme } from "@mui/material";

import Header from "../../components/Header";
import GeographyCharts from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geo = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header
        title="Geography Chart"
        subtitle="Simple Geography Chart showing stats"
      />

      <Box
        height="70vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        mt="20px"
      >
        <GeographyCharts isDashboard={isDashboard} />
      </Box>
    </Box>
  );
};

export default Geo;
