import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Fields, InitialValuesType } from "./types/teamForm";
import { useStoreContext } from "../store/store";

type FormHandlingPropsType = {
  id?: string;
  formData?: InitialValuesType | undefined;
};

const fields: Fields[] = [
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

const FormHandling = ({ id, formData }: FormHandlingPropsType) => {
  const { edit, setModalOpen } = useStoreContext();

  const initialFormData: InitialValuesType = {
    firstName: formData?.firstName ?? "",
    lastName: formData?.lastName ?? "",
    email: formData?.email ?? "",
    contact: formData?.contact ?? "",
    address: {
      area: formData?.address?.area ?? "",
      city: formData?.address?.city ?? "",
    },
    age: formData?.age ?? "",
    zip: formData?.zip ?? "",
  };

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values: InitialValuesType) => {
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
            {fields.map(({ name, type, label }) => (
              <TextField
                key={name}
                fullWidth
                type={type}
                variant="filled"
                label={label}
                onBlur={handleBlur}
                name={name}
                onChange={handleChange}
                sx={{ gridColumn: "span 2" }}
                error={!!touched[name] && !!errors[name]}
                helperText={
                  touched[name] && typeof errors[name] === "string"
                    ? errors[name]
                    : ""
                }
                value={values[name]}
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
