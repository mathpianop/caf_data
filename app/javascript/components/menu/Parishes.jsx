import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import ParishSelect from "../input/ParishSelect";
import ParishTable from "../tables/ParishTable";
import fetchResource from "../../helpers/fetchResource";

export default function Parishes() {
    const [parishes, setParishes] = useState([]);
    const [parishId, setParishId] = useState("");
    const [entries, setEntries] = useState()

    const findParishById = function() {
      return parishes.find(parish => parishId == parish.id)
    }


 
   const parishResults = function() {
    
    if (parishId !== "") {
      if (entries[parishId]) {
        return <ParishTable categories={entries.parishes[parishId]}/>
      } else {
        return <i>No entries for this parish yet!</i>
      }
      
    }
   }

   const parishContact = function() {
    const parish = findParishById()
    if (parishId !== "" && parish.contact) {
      return (
          <Box>
            {`Contact: ${parish.contact.name}, ${parish.contact.email}`}
          </Box>
      )
    }
   }

   

    useEffect(() => {
      fetchResource("entries", setEntries)
    fetchResource("parishes", setParishes)
  }, []);



    return (
        <div className="Parishes">
          <ParishSelect parishes={parishes} setParishId={setParishId} parishId={parishId}/>
          {parishContact()}
          {parishResults()}
        </div>
    )
}