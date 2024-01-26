import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import axios from "axios";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const Team = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3000/users").then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = data.map((user) => {
    return {
      id: user.id,
      name: [user.firstName, user.lastName].join(" "),
      age: user.age,
      email: user.email,
      phone: user.contact,
    };
  });

  const columns = [
    { field: "id", headerName: "ID" },
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
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Manage",
      flex: 1,
      renderCell: () => {
        return (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              width="60%"
              display="flex"
              p="8px"
              m="5px"
              justifyContent="center"
              backgroundColor={colors.greenAccent[600]}
              borderRadius="4px"
              sx={{ cursor: "pointer" }}
            >
              <EditOutlinedIcon />
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                Edit
              </Typography>
            </Box>

            <Box
              width="60%"
              p="8px"
              m="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={colors.greenAccent[600]}
              borderRadius="4px"
              sx={{ cursor: "pointer" }}
            >
              <DeleteOutlinedIcon />
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                Delete
              </Typography>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Team" subtitle="Managing the Team Memebers" />
      <Box
        m="10px 0 0 0"
        height="70vh"
        width="100%"
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
        }}
      >
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
