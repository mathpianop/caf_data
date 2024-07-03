import React, { useState, useEffect } from "react";

export default function Parishes() {
    const [parishes, setParishes] = useState([]);
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

    return (

        <div className="Parishes">
        <ul>{parishes.map(parish => {
            return <li key={parish.id}>{`${parish.name}`}</li>
        })}</ul>

    </div>
    )
}