import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Contacts from "./menu/Contacts";
import Sidebar from "./Sidebar";
import Parishes from "./menu/Parishes";
import Category from "./menu/Category";
import {Box, AppBar} from "@mui/material";

export default function Main() {

  const sidebarWidth = 180;

  const location = useLocation();
  
  const menuItems = [
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
          {`${location.pathname.slice(1)}`}
        </AppBar>
        <Routes>
          {menuItems.map(item => {
            return <Route path={`/${item.name}`} key={item.name} element={item.element} />
          })}
        </Routes>
        </Box>
      
    </div>
  
  )
}