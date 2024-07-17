import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Category from "../tables/Category";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import AddCard from "../input/AddCard";
import AddEntryForm from "../input/AddEntryForm";
import fetchResource from "../../helpers/fetchResource";
import TableTools from "../input/TableTools";
import useEntryForm from "../../helpers/useEntryForm";

export default function FestivalCategory(props) {

    const [entries, setEntries] = useState();
    const [parishes, setParishes] = useState();
    const [numOfJudges, setNumOfJudges] = useState(props.category.judges);

    const location = useLocation();
    const entryForm = useEntryForm(props.category, setEntries);

    const table = function() {

        if (entries) {
            const grades = entries.categories[props.category.id]

            if (grades) { 
                return <Category 
                            categoryName={props.category.name} 
                            grades={grades}
                        />
            } else {
                return <div><i>{`No entries in the ${capitalizeFirstLetter(props.category.name)} category yet`}</i></div>
            }
        }

    }

    const tableTools = function() {
        if (!entryForm.formOpen) {
            return <TableTools 
                        setFormOpen={entryForm.setFormOpen} 
                        numOfJudges={numOfJudges}
                        updateNumOfJudges={updateNumOfJudges}
                    />
        }
    }

    const entryFormComponent = function() {
        if (parishes) {
            if (entryForm.formOpen) {
                return (
                    <AddCard>
                         <AddEntryForm entryForm={entryForm} />
                    </AddCard>
                )
            }
           
        }
    }
    
    
    const updateNumOfJudges = function(newNum) {
        setNumOfJudges(newNum);
        fetch(`/api/category/${props.category.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({
                judges: newNum
            })
            })
            .then((response) => response.json())
            .then((data) => {
                fetchResource("entries", setEntries);
                props.getCategories();
            })
            .catch((error) => console.log(error));
    }
 

    useEffect(() => {
        fetchResource("parishes", setParishes);
        fetchResource("entries", setEntries)
    }, []);

    useEffect(() => {
        setNumOfJudges(props.category.judges)
    }, [location]);


  return (
    <div className="FestivalCategory">
       
        {entryFormComponent()}
        {tableTools()}
        {table()}
    </div>
)
}