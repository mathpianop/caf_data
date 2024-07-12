import React, { useState, useEffect } from "react";
import Category from "../tables/Category";
import fetchResource from "../../helpers/fetchResource";

export default function Summary() {
    const [entries, setEntries] = useState();


    const content = function() {
        if (entries) { 
            return (Object.entries(entries.categories).map((category) => {
                const categoryId = category[0]
                const grades = category[1]
                const arbitraryEntry = Object.values(grades)[0][0]
                return <Category 
                            key={categoryId} 
                            categoryName={arbitraryEntry.category.name} 
                            grades={grades}
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