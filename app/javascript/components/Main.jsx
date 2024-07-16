import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import Contacts from "./menu/Contacts";
import Sidebar from "./Sidebar";
import Parishes from "./menu/Parishes";
import FestivalCategory from "./menu/FestivalCategory";
import Summary from "./menu/Summary"
import {Box} from "@mui/material";
import Dashboard from "./menu/Dashboard";
import MyAppBar from "./MyAppBar";
import fetchResource from "../helpers/fetchResource";


export default function Main() {

  const sidebarWidth = 150;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState();
  

  const openDrawer = function() {
    setSidebarOpen(true);
  }

  const closeDrawer = function() {
    setSidebarOpen(false);
  }

  const getCategories = function() {
    fetchResource("categories", setCategories);
  }
 
  
  const menuItems = function() {

    const basicItems = [
      {name: "dashboard", element: <Dashboard />},
      {name: "parishes", element: <Parishes />},
      {name: "contacts", element: <Contacts />},
      {name: "summary", element: <Summary />}
    ];

    if (categories) {
      categories.forEach(category => {
        basicItems.splice(1,0, {
            name: category.name, element: <FestivalCategory category={category} getCategories={getCategories}/>
          })
      })
    }
      
    return basicItems;
}

  useEffect(getCategories, []);


  return (

    <div className="Main">
      <Sidebar 
        menuItems={menuItems()} 
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
          {menuItems().map(item => {
            return <Route path={`/${item.name}`} key={item.name} element={item.element} />
          })}
        </Routes>
        </Box>
        </Box>
      
    </div>
  
  )
}