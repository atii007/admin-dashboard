import React from "react";
import { Box } from "@mui/material";

type StatBoxPropsType = {
  gridColumn: string;
  backgroundColor: string;
  children: React.ReactElement;
};

const StatBoxContainer = ({
  gridColumn,
  backgroundColor,
  children,
}: StatBoxPropsType) => {
  return (
    <Box
      sx={{
        gridColumn,
        backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default StatBoxContainer;
