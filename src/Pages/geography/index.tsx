import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "components/Header";
import GeographyCharts from "components/GeographyChart";

type GeoPropsType = {
  isDashboard?: boolean;
};

const Geo = ({ isDashboard = false }: GeoPropsType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header
        title="Geography Chart"
        subtitle="Simple Geography Chart showing stats"
      />

      <Box
        height="60vh"
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
