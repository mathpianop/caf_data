import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";


export default function Main() {

  return (

    <div className="Main">
        <Link to="/contacts">Contacts</Link>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  
  

  )
}