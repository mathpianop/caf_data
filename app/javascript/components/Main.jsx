import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Contacts from "./menu/Contacts";
import Sidebar from "./Sidebar";
import Parishes from "./menu/Parishes";
import FestivalCategory from "./menu/FestivalCategory";
import Summary from "./menu/Summary"
import {Box, AppBar, Typography} from "@mui/material";
import Dashboard from "./menu/Dashboard";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";

export default function Main() {

  const sidebarWidth = 180;

  const location = useLocation();
  
  const menuItems = [
    {name: "dashboard", element: <Dashboard />},
    {name: "art", element: <FestivalCategory name="art"/>},
    {name: "writing", element: <FestivalCategory name="writing"/>},
    {name: "photography", element: <FestivalCategory name="photography"/>},
    {name: "poetry", element: <FestivalCategory name="poetry"/>},
    {name: "parishes", element: <Parishes/>},
    {name: "contacts", element: <Contacts/>},
    {name: "summary", element: <Summary />}
  ];

  return (

    <div className="Main">
      <Sidebar menuItems={menuItems} width={sidebarWidth}/>
      {/* Everything but the Sidebar */}
      <Box
        sx={{
          width: { sm: `calc(100% - ${sidebarWidth}px)` },
          ml: { sm: `${sidebarWidth}px` }
        }}
      
      >
        <AppBar
          position="sticky"
          sx={{
            padding: "10px"
          }}
        >
          <Typography variant="h4" gutterBottom>
             {capitalizeFirstLetter(location.pathname.slice(1)) || "Dashboard"}
          </Typography>
        </AppBar>
        <Box
           sx={{
            padding: "10px"
           }}
        >
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          {menuItems.map(item => {
            return <Route path={`/${item.name}`} key={item.name} element={item.element} />
          })}
        </Routes>
        </Box>
        </Box>
      
    </div>
  
  )
}