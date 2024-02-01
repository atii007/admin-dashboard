import React from "react";
import { Box } from "@mui/material";

const StatBoxContainer = ({ gridColumn, backgroundColor, children }) => {
  return (
    <Box
      gridColumn={gridColumn}
      backgroundColor={backgroundColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

export default StatBoxContainer;
