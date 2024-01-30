import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import * as Yup from "yup";

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

const FormHandling = ({ formData, edit }) => {
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: { area: "", city: "" },
    age: undefined,
    zip: undefined,
  });

  useEffect(() => {
    if (edit) {
      setInitialValues(formData);
    }
  }, []);
  console.log("InitialValues", initialValues);

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => console.log(res));

    window.alert("User Added Successfully");
    navigate("/team");
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
        <form onSubmit={handleSubmit}>
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
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={!!touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Phone Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={!!touched.contact && !!errors.contact}
              helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Area"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address.area}
              name="address.area"
              error={!!touched.address?.area && !!errors.address?.area}
              helperText={touched.address?.area && errors.address?.area}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="City"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address.city}
              name="address.city"
              error={!!touched.address?.city && !!errors.address?.city}
              helperText={touched.address?.city && errors.address?.city}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Age"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.age}
              name="age"
              error={!!touched.age && !!errors.age}
              helperText={touched.age && errors.age}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Zip"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.zip}
              name="zip"
              error={!!touched.zip && !!errors.zip}
              helperText={touched.zip && errors.zip}
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
