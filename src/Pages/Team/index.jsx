import React, { useEffect, useState } from "react";
import { Box, useTheme, Button, Modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import axios from "axios";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import FormHandling from "../../components/Form";
import { toast } from "react-toastify";

const Team = () => {
  const [formData, setFormData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  // const navigate = useNavigate();

  const getData = () => {
    axios.get("http://localhost:3000/users").then((res) => setData(res.data));
  };

  const handleDeletion = (userId) => {
    if (userId) {
      axios
        .delete(`http://localhost:3000/users/${userId}`, { data: data })
        .then(() => getData());
    }
    toast.error("User Data Deleted");
  };

  const handleEdit = async (userId) => {
    await axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((res) => setFormData(res.data));

    setModalOpen(true);
    setEdit(true);
    setId(userId);
  };

  useEffect(() => {
    // console.log("Team Component Rendered");
    getData();
  }, [modalOpen]);

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
      renderCell: (params) => {
        const handleDeleteClick = () => handleDeletion(params.id);
        const handleEditClick = () => handleEdit(params.id);
        return (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box display="flex" justifyContent="center">
              <Button
                sx={{
                  cursor: "pointer",
                  color: colors.grey[100],
                  backgroundColor: colors.greenAccent[600],
                  borderRadius: "4px",
                  p: "8px",
                  m: "5px",
                }}
                startIcon={
                  <EditOutlinedIcon sx={{ color: colors.grey[100] }} />
                }
                onClick={handleEditClick}
              >
                Edit
              </Button>
            </Box>

            <Box display="flex" justifyContent="center">
              <Button
                sx={{
                  cursor: "pointer",
                  color: colors.grey[100],
                  backgroundColor: colors.greenAccent[600],
                  borderRadius: "4px",
                  p: "8px",
                  m: "5px",
                }}
                startIcon={
                  <DeleteOutlinedIcon sx={{ color: colors.grey[100] }} />
                }
                onClick={handleDeleteClick}
              >
                Delete
              </Button>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEdit(false);
        }}
        aria-labelledby="edit-modal"
        aria-describedby="edit-modal-description"
      >
        <Box
          sx={{
            width: "60%",
            m: "auto",
            mt: "40px",
            p: "35px",
            backgroundColor: colors.primary[400],
            borderRadius: "4px",
            boxShadow: `0 1px 2px 0 ${colors.blueAccent[600]}, 0 2px 7px 0 ${colors.blueAccent[600]}`,
          }}
        >
          <FormHandling
            setModalOpen={setModalOpen}
            formData={formData}
            edit={edit}
            id={id}
          />
        </Box>
      </Modal>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Team" subtitle="Manage Team"></Header>

        <Box>
          <Link to="/form">
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                p: "10px 20px",
              }}
            >
              <PersonIcon
                sx={{
                  mr: "10px",
                }}
              />
              Add Team Member
            </Button>
          </Link>
        </Box>
      </Box>

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
