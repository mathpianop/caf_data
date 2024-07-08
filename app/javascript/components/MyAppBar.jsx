import React from "react";
import {AppBar, Typography, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";
import {useLocation} from "react-router-dom"

export default function MyAppBar(props) {

  const menuIcon = function() {
    
    if (!props.sidebarOpen) {
      return (
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.openDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
      )
    }
  }

    const location = useLocation();

    return (
        <AppBar
          position="sticky"
          sx={{
            padding: "10px"
          }}
        >
          <Toolbar>
            {menuIcon()}  
            <Typography variant="h4">
              {capitalizeFirstLetter(location.pathname.slice(1)) || "Dashboard"}
            </Typography>
          </Toolbar>
  
          </AppBar>
    )
}