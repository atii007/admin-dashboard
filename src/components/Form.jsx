import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import * as Yup from "yup";

const fields = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
  },
  {
    name: "email",
    type: "text",
    label: "Email",
  },
  {
    name: "contact",
    type: "text",
    label: "Phone Number",
  },
  {
    name: "age",
    type: "number",
    label: "Age",
  },
  {
    name: "zip",
    type: "number",
    label: "Zip Code",
  },
];

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const userSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Email Required"),
  contact: Yup.string()
    .matches(phoneRegExp, "Invalid Phone Number Format")
    .required("Required"),
  address: Yup.object().shape({
    area: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
  }),
  age: Yup.number().required("Required"),
  zip: Yup.number().required("Required"),
});

const FormHandling = ({ setModalOpen, setFormData, edit, id, formData }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: { area: "", city: "" },
    age: undefined,
    zip: undefined,
  };

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => console.log(res));

    window.alert("User Added Successfully");
    navigate("/team");
  };

  console.log(formData);

  const updateForm = (event, values) => {
    event.preventDefault();
    console.log(formData);
    axios
      .put(`http://localhost:3000/users/${id}`, formData)
      .then((res) => console.log(res.data));

    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => {
      if (name.startsWith("address.")) {
        const nestedField = name.split(".")[1];
        return {
          ...formData,
          address: {
            ...formData.address,
            [nestedField]: value,
          },
        };
      } else {
        return {
          ...formData,
          [name]: value,
        };
      }
    });
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={userSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={edit ? updateForm : handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            mt="20px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": {
                gridColumn: isNonMobile ? undefined : "span 4",
              },
            }}
          >
            {fields.map((input) => (
              <TextField
                key={input.name}
                fullWidth
                variant="filled"
                type={input.type}
                label={input.label}
                onBlur={handleBlur}
                onChange={edit ? handleInputChange : handleChange}
                value={edit ? formData[input.name] : values[input.name]}
                name={input.name}
                error={!edit && !!touched[input.name] && !!errors[input.name]}
                helperText={!edit && touched[input.name] && errors[input.name]}
                sx={{ gridColumn: "span 2" }}
              />
            ))}

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Area"
              onBlur={handleBlur}
              onChange={edit ? handleInputChange : handleChange}
              value={edit ? formData.address.area : values.address.area}
              name="address.area"
              error={!edit && !!touched.address?.area && !!errors.address?.area}
              helperText={
                !edit && touched.address?.area && errors.address?.area
              }
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="City"
              onBlur={handleBlur}
              onChange={edit ? handleInputChange : handleChange}
              value={edit ? formData.address.city : values.address.city}
              name="address.city"
              error={!edit && !!touched.address?.city && !!errors.address?.city}
              helperText={
                !edit && touched.address?.city && errors.address?.city
              }
              sx={{ gridColumn: "span 2" }}
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="large"
            >
              {edit ? "Update User" : "Create New User"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default FormHandling;
