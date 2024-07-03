import React, { useState, useEffect } from "react";
import Category from "../tables/Category";

export default function Summary() {
    const [entries, setEntries] = useState();


    const content = function() {
        if (entries) { 
            return (entries.category.map(category => {
                //console.log(category[1]);
                return <Category key={category[0]} categoryName={category[0]} grades={category[1]}/>
            }))
        }
    }


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

    <div className="Summary">
       {content()}
    </div>
)
}