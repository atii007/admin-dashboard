import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Navlinks = [
  { title: "Dashboard", to: "/", icon: <HomeOutlinedIcon /> },
  { title: "Data" },
  { title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon /> },
  {
    title: "Contact Information",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Invoices Balance",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
  { title: "Pages" },
  { title: "Profile Form", to: "/form", icon: <PersonOutlinedIcon /> },

  { title: "FAQ Page", to: "/faq", icon: <HelpOutlinedIcon /> },
  { title: "Charts" },
  { title: "Bar Chart", to: "/bar", icon: <BarChartOutlinedIcon /> },
  { title: "Pie Chart", to: "/pie", icon: <PieChartOutlinedIcon /> },
  { title: "Line Chart", to: "/line", icon: <TimelineOutlinedIcon /> },
  { title: "Geography Chart", to: "/geography", icon: <MapOutlinedIcon /> },
];

const SidebarLinks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      {Navlinks.map((links) =>
        links.title === "Data" ||
        links.title === "Pages" ||
        links.title === "Charts" ? (
          <Typography
            key={links.title}
            style={{
              color: colors.grey[100],
              marginLeft: "16px",
              padding: "20px",
            }}
          >
            {links.title}
          </Typography>
        ) : (
          <MenuItem
            key={links.title}
            component={<Link to={links.to} />}
            title={links.title}
            icon={links.icon}
            style={{
              color: colors.grey[100],
            }}
          >
            <Typography>{links.title}</Typography>
          </MenuItem>
        )
      )}
    </Box>
  );
};

export default SidebarLinks;
