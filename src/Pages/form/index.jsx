import { Box } from "@mui/material";
import Header from "../../components/Header";

import FormHandling from "../../components/Form";

const Form = () => {
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a new user Profile" />
      <FormHandling />
    </Box>
  );
};

export default Form;
