import React, { useState, useEffect } from "react";
import Category from "../tables/Category";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import AddEntryCard from "../input/AddEntryCard";
import {Button} from "@mui/material"

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
                return <i>{`No entries in the ${capitalizeFirstLetter(props.name)} category yet`}</i>
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
                    <Button onClick={() => setFormOpen(true)}>Add Entry</Button>
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

    const fetchEntries = function() {
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
    }

    const submitForm = function() {
        fetch("/api/entries", {
            method: "POST",
            headers: {
                // "X-CSRF-Token": token,
                "Content-Type": "application/json",
                },
            body: getSendableFormData()
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                fetchEntries();
            })
            .catch((error) => console.log(error));
    }
 

    useEffect(() => {
        fetchEntries();
    }, []);

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

    <div className="FestivalCategory">
        {entryFormOrButton()}
       {table()}
      


    </div>
)
}