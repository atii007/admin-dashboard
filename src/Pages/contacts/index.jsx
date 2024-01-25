import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import axios from "axios";

import { tokens } from "../../theme";
import Header from "../../components/Header";

const Contacts = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://65b219a69bfb12f6eafcd872.mockapi.io/crud-form")
      .then((res) => setMyData(res.data));
  }, []);

  const rows = myData.map((user) => {
    return {
      id: user.id,
      name: [user.firstName, user.lastName].join(" "),
      age: user.age,
      email: user.email,
      contact: user.contact,
      zip: user.zip,
      address: user.address,
      city: user.city,
    };
  });

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "contact",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zip",
      headerName: "ZipCode",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="10px 0 0 0"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          {...myData}
          initialState={{
            ...myData.initialState,
            pagination: {
              ...myData.initialState?.pagination,
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
