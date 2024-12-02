import { Box } from "@mui/material";
import FormHandling from "components/Form";
import Header from "components/Header";

const Form = () => {
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a new user Profile" />
      <FormHandling />
    </Box>
  );
};

export default Form;
