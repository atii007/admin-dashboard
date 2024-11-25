import React, { useState } from "react";
import { Box, useTheme, Typography, IconButton } from "@mui/material";
import { menuClasses, sidebarClasses } from "react-pro-sidebar";
import { tokens } from "../../theme";
import { Menu, MenuItem, Sidebar as ProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <Box>
      <ProSidebar
        collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
        style={{ borderRight: "0", height: "150vh" }}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]} !important`,
          },
          [`.${menuClasses.button}:hover`]: {
            backgroundColor: `${colors.primary[400]} !important`,
            color: "#6870fa !important",
          },
          "& .ps-menu-button:active": {
            color: "#6870fa !important",
          },
        }}
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="5px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src={`../../assets/user1.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Atif Razzaq
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* Menu Items */}
          <SidebarLinks />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
