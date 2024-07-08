import React, { useState } from "react";
import ParishSelect from "./ParishSelect";
import {TextField, FormGroup, Button, Grid} from "@mui/material"
import NumberSelect from "./NumberSelect";

export default function AddEntryForm({ formProps, setFormOpen }) {

    const [parishId, setParishId] = useState("")
    const [score, setScore] = useState("")
    const [grade, setGrade] = useState("")
    const [name, setName] = useState("");

    const fields = ["parishId", "name", "score", "grade"]

    const handleParishChange = function(id) {
        setParishId(id)
        formProps.formData.set("parishId", id)
    }

    const handleNameChange = function(event) {
        setName(event.target.value);
        formProps.formData.set("name", event.target.value);
    }

    const handleScoreChange = function(e) {
        setScore(e.target.value);
        formProps.formData.set("score", e.target.value)
    }

    const handleGradeChange = function(e) {
        setGrade(e.target.value);
        formProps.formData.set("grade", e.target.value)
    }

    const closeForm = function() {
        setFormOpen(false);
    }

    const allFieldsFilled = function() {
        return [name, parishId, grade, score].every(field => field && field !== "")
    }


    return (
        <form>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <ParishSelect 
                        parishes={formProps.parishes} 
                        setParishId={handleParishChange} 
                        parishId={parishId}
                        required={true}
                    />
                </Grid>
               <Grid item xs={6} sm={6} md={6}>
                    <TextField 
                        id="Name" 
                        label="Name" 
                        variant="outlined" 
                        onChange={handleNameChange}
                        sx={{width: "100%"}}
                        required
                    />  
               </Grid>

               <Grid item xs={4} sm={3} md={3}>
                    <NumberSelect 
                        value={score} 
                        handleChange={handleScoreChange} 
                        min={0}
                        max={formProps.maxScore}
                        label="Score"
                        id="score-select"
                    />
               </Grid>

               <Grid item xs={4} sm={3} md={3}>
                    <NumberSelect 
                        value={grade} 
                        handleChange={handleGradeChange} 
                        min={1}
                        max={12}
                        id="grade-select"
                        label="Grade"
                    />
               </Grid>
            </Grid>
           {console.log(formProps.formData.get("name"))}
            <Button onClick={closeForm}>Cancel</Button>
            <Button onClick={formProps.submitForm} disabled={!allFieldsFilled()}>Save</Button>
            
        </form>
    )
}