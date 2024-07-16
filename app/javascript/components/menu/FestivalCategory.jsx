import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Category from "../tables/Category";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import AddEntryCard from "../input/AddEntryCard";
import fetchResource from "../../helpers/fetchResource";
import TableTools from "../input/TableTools";

export default function FestivalCategory(props) {
    const [entries, setEntries] = useState();
    const [formData, setFormData] = useState(new FormData());
    const [parishes, setParishes] = useState();
    const [formOpen, setFormOpen] = useState(false);
    const [numOfJudges, setNumOfJudges] = useState(props.category.judges);
    const location = useLocation();

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
        if (!formOpen) {
            return <TableTools 
                        setFormOpen={setFormOpen} 
                        numOfJudges={numOfJudges}
                        updateNumOfJudges={updateNumOfJudges}
                    />
        }
    }

    const entryForm = function() {
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
            }
           
        }
    }

    const maxScore = function() {
        if (props.category.name === "art" || props.category.name === "photography") {
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
            category_id: props.category.id,
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
       
        {entryForm()}
        {tableTools()}
        {table()}
    </div>
)
}