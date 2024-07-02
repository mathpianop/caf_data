import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./menu/Contacts";
import Menu from "./Menu";
import Parishes from "./menu/Parishes";


export default function Main() {

  return (

    <div className="Main">
      <Menu />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/parishes" element={<Parishes />} />
      </Routes>
    </div>
  
  

  )
}