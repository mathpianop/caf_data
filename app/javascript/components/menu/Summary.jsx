import React, { useState, useEffect } from "react";
import Category from "../tables/Category";
import fetchResource from "../../helpers/fetchResource";

export default function Summary() {
    const [entries, setEntries] = useState();


    const content = function() {
        if (entries) { 
            return (Object.entries(entries.categories).map((category) => {
                //console.log(category[1]);
                return <Category 
                            key={category[0]} 
                            categoryName={category[0]} 
                            grades={category[1]}
                            summary={true}
                        />
            }))
        }
    }


    useEffect(() => {
        fetchResource("entries", setEntries)
    }, []);



  return (

    <div className="Summary">
       {content()}
    </div>
)
}