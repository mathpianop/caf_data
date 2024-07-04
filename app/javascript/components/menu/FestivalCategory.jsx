import React, { useState, useEffect } from "react";
import Category from "../tables/Category";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";

export default function FestivalCategory(props) {
    const [entries, setEntries] = useState();


    const content = function() {

        if (entries) {
            const grades = entries.categories[props.name]

            if (grades) { 
                return <Category categoryName={props.name} grades={grades}/>
            } else {
                return <i>{`No entries in the ${capitalizeFirstLetter(props.name)} category yet`}</i>
            }
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

    <div className="Category">
       {content()}
    </div>
)
}