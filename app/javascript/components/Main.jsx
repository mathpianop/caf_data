import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Contacts from "./menu/Contacts";
import Sidebar from "./Sidebar";
import Parishes from "./menu/Parishes";
import Category from "./menu/Category";
import {Box, AppBar, Typography} from "@mui/material";
import Dashboard from "./menu/Dashboard";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";

export default function Main() {

  const sidebarWidth = 180;

  const location = useLocation();
  
  const menuItems = [
    {name: "dashboard", element: <Dashboard />},
    {name: "art", element: <Category name="art"/>},
    {name: "writing", element: <Category name="writing"/>},
    {name: "photography", element: <Category name="photography"/>},
    {name: "poetry", element: <Category name="poetry"/>},
    {name: "parishes", element: <Parishes/>},
    {name: "contacts", element: <Contacts/>}
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
             {capitalizeFirstLetter(location.pathname.slice(1))}
          </Typography>
        </AppBar>
        <Box
           sx={{
            padding: "10px"
           }}
        >
        <Routes>
          <Route path="/"/>
          {menuItems.map(item => {
            return <Route path={`/${item.name}`} key={item.name} element={item.element} />
          })}
        </Routes>
        </Box>
        </Box>
      
    </div>
  
  )
}