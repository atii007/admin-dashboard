import { Box } from "@mui/material";
import BarCharts from "components/BarChart";
import Header from "components/Header";

type BarPropsType = {
  isDashboard?: boolean;
};

const Bar = ({ isDashboard = false }: BarPropsType) => {
  return (
    <Box m="20px">
      <Header
        title="Food Consumption"
        subtitle="Distribution of Popular Food Items in different Countries"
      />
      <Box
        height="70vh"
        mt="20px"
        border=" 1px solid #e0e0e0"
        border-radius="4px"
      >
        <BarCharts isDashboard={isDashboard} />
      </Box>
    </Box>
  );
};

export default Bar;
