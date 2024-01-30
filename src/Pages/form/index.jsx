import { Box } from "@mui/material";
import Header from "../../components/Header";

import FormHandling from "../../components/Form";

const Form = () => {
  // const [values, setValues] = useState([]);

  // const location = useLocation();
  // const userId = new URLSearchParams(location.search).get("id");

  // console.log("User Id", userId);

  // useEffect(() => {
  //   if (userId) {
  //     axios
  //       .get(`http://localhost:3000/users/${userId}`)
  //       .then((res) => console.log(res.data));
  //     console.log("Values", values);
  //   }
  // }, []);

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a new user Profile" />
      <FormHandling />
    </Box>
  );
};

export default Form;
