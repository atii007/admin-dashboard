import { useTheme, Typography } from "@mui/material";
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

type NavlinksType = {
  title: string;
  to: string;
  icon: JSX.Element;
};

const Navlinks: NavlinksType[] = [
  { title: "Dashboard", to: "/", icon: <HomeOutlinedIcon /> },
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
  { title: "Profile Form", to: "/form", icon: <PersonOutlinedIcon /> },

  { title: "FAQ Page", to: "/faq", icon: <HelpOutlinedIcon /> },
  { title: "Bar Chart", to: "/bar", icon: <BarChartOutlinedIcon /> },
  { title: "Pie Chart", to: "/pie", icon: <PieChartOutlinedIcon /> },
  { title: "Line Chart", to: "/line", icon: <TimelineOutlinedIcon /> },
  { title: "Geography Chart", to: "/geography", icon: <MapOutlinedIcon /> },
];

const SidebarLinks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {Navlinks.map((links) => (
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
      ))}
    </>
  );
};

export default SidebarLinks;
