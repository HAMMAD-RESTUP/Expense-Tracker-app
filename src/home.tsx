import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemIcon } from "@mui/material";

import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Route,Routes, useNavigate } from "react-router-dom";
import Logo from "../src/assets/try.png"

import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SettingsIcon from '@mui/icons-material/Settings';
import TimelineIcon from '@mui/icons-material/Timeline';
import Addexpense from "./App Pages/addexpense";
import Checkexpense from "./App Pages/checkexpense";
import Expensecategory from "./App Pages/expensecategory";
import Setting from "./App Pages/setting";
import Dashboard from "./App Pages/dashboard";

const drawerWidth = 240;

function Home(props:any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [pagesArr, setPagesArr] = React.useState([
    {
      name: "Dashboard",
      route:"/dashboard",
      icon:<HomeIcon/>
    
  
    },
    {
      name: "Add Expenses",
      route: "addexpense",
      icon:<AddIcon/>
  
    },
    {
      name: "Check Expenses",
      route: "checkexpense",
      icon:<PriceCheckIcon/>
     
    },
  
    {
      name: "Expenses Category",
      route: "expensecategory",
      icon:<TimelineIcon/>
     
    },
  
    {
      name: "Settings",
      route: "setting",
      icon:<SettingsIcon/>
     
    },
  
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const openPage = (route:any) => {
    navigate(`${route}`);
    setMobileOpen(!mobileOpen);
  };

  console.log(setPagesArr)

  const drawer = (
    <div>
      <Toolbar />
      <img className="logo" src={Logo} alt="" />
      <Divider />
      <List>
        {pagesArr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => openPage(x.route)}>
              <ListItemIcon>{x.icon ? x.icon : <AddIcon />}</ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
  
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:"#e2e8f0"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <  MenuIcon sx={{color:"black"}} />
          </IconButton>
          <Typography sx={{color:"black"}} variant="h6" noWrap component="div">
           Expense Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
     
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addexpense" element={<Addexpense />} />
          <Route path="checkexpense" element={<Checkexpense />} />
          <Route path="expensecategory" element={<Expensecategory />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
     
      </Box>
    </Box>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;