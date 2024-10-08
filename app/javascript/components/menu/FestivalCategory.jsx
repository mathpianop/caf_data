import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Category from "../tables/Category";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import AddCard from "../input/AddCard";
import AddEntryForm from "../input/AddEntryForm";
import fetchResource from "../../helpers/fetchResource";
import TableTools from "../input/TableTools";
import useEntryForm from "../../helpers/useEntryForm";
import getSpreadsheetURL from "../../helpers/getSpreadSheetURL";
import { Box } from "@mui/material";

export default function FestivalCategory(props) {

    const [entries, setEntries] = useState();
    const [parishes, setParishes] = useState();
    const [numOfJudges, setNumOfJudges] = useState(props.category.judges);

    const location = useLocation();
    const entryForm = useEntryForm(props.category, setEntries);

    const grades = function() {
            return entries.categories[props.category.id]
    }

    const table = function() {

        if (entries) {
            console.log(grades())
            if (grades()) { 
                return <Category 
                            categoryName={props.category.name} 
                            grades={grades()}
                            entryForm={entryForm}
                        />
            } else {
                return <div><i>{`No entries in the ${capitalizeFirstLetter(props.category.name)} category yet`}</i></div>
            }
        }

    }


    const vetSpreadsheetURL = function() {
        if (entries && grades()) {
            return getSpreadsheetURL(entries, props.category.id)
        }
    }

    const tableTools = function() {
        if (!entryForm.formOpen) {
            return <TableTools 
                        openForm={entryForm.openForm} 
                        numOfJudges={numOfJudges}
                        updateNumOfJudges={updateNumOfJudges}
                        spreadsheetURL={vetSpreadsheetURL()}
                        categoryName={props.category.name}
                    />
        }
    }

    const entryFormComponent = function() {
        if (parishes) {
            if (entryForm.formOpen) {
                return (
                    <AddCard title="AddEntry">
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
        <Box sx={{mt: "10px"}}>
            {table()}   
        </Box>
     
    </div>
)
}