import React, { useState, useEffect } from "react";


import ParishSelect from "../input/ParishSelect";
import ParishTable from "../tables/ParishTable";
import fetchResource from "../../helpers/fetchResource";
import ParishContact from "../input/ParishContact";
import { Box } from "@mui/material";


export default function Parishes() {
    const [parishes, setParishes] = useState([]);
    const [parishId, setParishId] = useState("");
    const [entries, setEntries] = useState();

    const findParishById = function() {
      return parishes.find(parish => parishId == parish.id)
    }


 
   const parishResults = function() {
    
    if (parishId !== "") {
      console.log(entries)
      if (entries.parishes[parishId]) {
        return <ParishTable categories={entries.parishes[parishId]}/>
      } else {
        return <i>No entries for this parish yet!</i>
      }
    }
   }

   const parishContact = function() {
    const parish = findParishById()
    if (parishId !== "") {
      return <ParishContact parish={parish} setParishes={setParishes}/>
    }
   }

   const handleParishSelect = function(e) {
    setParishId(e.target.value);
   }

   

    useEffect(() => {
      fetchResource("entries", setEntries)
    fetchResource("parishes", setParishes)
  }, []);



    return (
        <div className="Parishes" style={{mt: 10}}>
          <ParishSelect parishes={parishes} onChange={handleParishSelect} parishId={parishId}/>
          {parishContact()}
          <Box sx={{mt: "10px"}}>
            {parishResults()}
          </Box>
        </div>
    )
}