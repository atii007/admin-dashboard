import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";

import * as Yup from "yup";

import { toast } from "react-toastify";

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

const FormHandling = ({ setModalOpen, edit, id, formData }) => {
  const initialFormData = {
    firstName: formData?.firstName ?? "",
    lastName: formData?.lastName ?? "",
    email: formData?.email ?? "",
    contact: formData?.contact ?? "",
    address:
      {
        area: formData?.address?.area ?? "",
        city: formData?.address?.city ?? "",
      } || {},
    age: formData?.age ?? null,
    zip: formData?.zip ?? null,
  };

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    if (edit) {
      axios
        .put(`http://localhost:3000/users/${id}`, values)
        .then((res) => console.log(res.data));

      toast.success("User Data Updated Successfully!");

      setModalOpen(false);
    } else {
      //when creating new data
      axios
        .post("http://localhost:3000/users", values)
        .then((res) => console.log(res));

      toast.success("User Added Successfully");
      navigate("/team");
    }
  };

  return (
    <Formik
      initialValues={initialFormData}
      validationSchema={userSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
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
            {fields.map((fieldData) => (
              <TextField
                key={fieldData.name}
                fullWidth
                type={fieldData.type}
                variant="filled"
                label={fieldData.label}
                onBlur={handleBlur}
                name={fieldData.name}
                onChange={handleChange}
                sx={{ gridColumn: "span 2" }}
                error={!!touched[fieldData.name] && !!errors[fieldData.name]}
                helperText={touched[fieldData.name] && errors[fieldData.name]}
                value={values[fieldData.name]}
              />
            ))}

            <TextField
              fullWidth
              type="text"
              variant="filled"
              label="Area"
              onBlur={handleBlur}
              name="address.area"
              onChange={handleChange}
              sx={{ gridColumn: "span 2" }}
              error={!!touched.address?.area && !!errors.address?.area}
              helperText={touched.address?.area && errors.address?.area}
              value={values.address.area}
            />

            <TextField
              fullWidth
              type="text"
              variant="filled"
              label="City"
              onBlur={handleBlur}
              name="address.city"
              onChange={handleChange}
              sx={{ gridColumn: "span 2" }}
              error={!!touched.address?.city && !!errors.address?.city}
              helperText={touched.address?.city && errors.address?.city}
              value={values.address.city}
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
