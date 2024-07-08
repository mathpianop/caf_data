import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Contacts from "./menu/Contacts";
import Sidebar from "./Sidebar";
import Parishes from "./menu/Parishes";
import FestivalCategory from "./menu/FestivalCategory";
import Summary from "./menu/Summary"
import {Box} from "@mui/material";
import Dashboard from "./menu/Dashboard";
import MyAppBar from "./MyAppBar";


export default function Main() {

  const sidebarWidth = 150;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openDrawer = function() {
    setSidebarOpen(true);
  }

  const closeDrawer = function() {
    setSidebarOpen(false);
  }
 
  
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
      <Sidebar 
        menuItems={menuItems} 
        width={sidebarWidth} 
        open={sidebarOpen} 
        closeDrawer={closeDrawer}
      />
      {/* Everything but the Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", sm: `calc(100% - ${sidebarWidth}px)` },
          ml: { xs: 0, sm: `${sidebarWidth}px` }
        }}
      >
        <MyAppBar sidebarOpen={sidebarOpen} openDrawer={openDrawer}/>
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