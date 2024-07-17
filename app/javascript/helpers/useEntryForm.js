import React from "react";
import useFieldData from "./useFieldData";
import fetchResource from "./fetchResource";
import { useState } from "react";

export default function useEntryForm(category, setEntries) {
    const addEntryFields = ["name", "grade", "score", "parishId"];

    const fieldData = useFieldData(addEntryFields);
    const [formOpen, setFormOpen] = useState(false)
    
    const getSendableFormData = function() {
        return JSON.stringify({
            name: fieldData.data.name,
            grade: fieldData.data.grade,
            parish_id: fieldData.data.parishId,
            category_id: category.id,
            score: fieldData.data.score
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

    const maxScore = function() {
        if (category.name === "art" || category.name === "photography") {
            return 48
        } else {
            return 60
        }
    }

    return {submitForm, fieldData, formOpen, setFormOpen, maxScore}

}