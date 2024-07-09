import React, { useState, useEffect } from "react";
import Category from "../tables/Category";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import AddEntryCard from "../input/AddEntryCard";
import {Button} from "@mui/material"
import fetchResource from "../../helpers/fetchResource";

export default function FestivalCategory(props) {
    const [entries, setEntries] = useState();
    const [formData, setFormData] = useState(new FormData());
    const [parishes, setParishes] = useState();
    const [formOpen, setFormOpen] = useState(false);


    const table = function() {

        if (entries) {
            const grades = entries.categories[props.name]

            if (grades) { 
                return <Category categoryName={props.name} grades={grades}/>
            } else {
                return <div><i>{`No entries in the ${capitalizeFirstLetter(props.name)} category yet`}</i></div>
            }
        }

    }

    const entryFormOrButton = function() {
        if (parishes) {
            if (formOpen) {
                return (
                    <AddEntryCard 
                        formProps={{
                            formData: formData, 
                            parishes: parishes, 
                            maxScore: maxScore(),
                            submitForm: submitForm
                        }}
                        setFormOpen={setFormOpen}
                    />
                )
            } else {
                return (
                    <Button 
                        variant="contained" 
                        onClick={() => setFormOpen(true)}
                        sx={{
                            bgcolor: "#000000",
                            mb: "10px"
                        }}
                    >  
                        + Add Entry
                    </Button>
                )
            }
           
        }
    }

    const maxScore = function() {
        if (props.name === "art" || props.name === "photography") {
            return 48
        } else {
            return 60
        }
    }

    
    const getSendableFormData = function() {
        return JSON.stringify({
            name: formData.get("name"),
            grade: formData.get("grade"),
            parish_id: formData.get("parishId"),
            category: props.name,
            score: formData.get("score")
        })
    }

    

    const submitForm = function() {
        fetch("/api/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: getSendableFormData()
            })
            .then((response) => response.json())
            .then((data) => {
                fetchResource("entries", setEntries);
                setFormOpen(false);
            })
            .catch((error) => console.log(error));
    }
 

    useEffect(() => {
        fetchResource("entries", setEntries);
        fetchResource("parishes", setParishes);
    }, []);

    


  return (

    <div className="FestivalCategory">
        {entryFormOrButton()}
       {table()}

    </div>
)
}