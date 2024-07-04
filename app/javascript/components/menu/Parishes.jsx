import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import ParishSelect from "../input/ParishSelect";
import ParishTable from "../tables/ParishTable";

export default function Parishes() {
    const [parishes, setParishes] = useState([]);
    const [parishId, setParishId] = useState("");
    const [entries, setEntries] = useState()

    const findParishById = function() {
      return parishes.find(parish => parishId == parish.id)
    }


 
   const parishResults = function() {
    if (parishId !== "") {
      return <ParishTable categories={entries.parishes[parishId]}/>
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
    fetch("/api/parishes", {
      method: "GET",
      headers: {
        // "X-RapidAPI-Key": "your-api-key",
        // "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setParishes(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("/api/entries", {
    method: "GET",
    headers: {
        // "X-RapidAPI-Key": "your-api-key",
        // "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    },
    })
    .then((response) => response.json())
    .then((data) => {
        setEntries(data);
    })
    .catch((error) => console.log(error));
}, []);

    return (
        <div className="Parishes">
          <ParishSelect parishes={parishes} setParishId={setParishId} parishId={parishId}/>
          {parishContact()}
          {parishResults()}
        </div>
    )
}