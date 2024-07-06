import React, { useState } from "react";
import ParishSelect from "./ParishSelect";
import {TextField, FormGroup, Button} from "@mui/material"
import NumberSelect from "./NumberSelect";

export default function AddEntryForm(props) {

    const [parishId, setParishId] = useState("")
    const [score, setScore] = useState("")
    const [grade, setGrade] = useState("")

    const handleParishChange = function(id) {
        setParishId(id)
        props.formData.set("parishId", id)
    }

    const handleNameChange = function(event) {
        props.formData.set("name", event.target.value)
    }

    const handleScoreChange = function(e) {
        console.log(e.target.value)
        setScore(e.target.value);
        props.formData.set("score", e.target.value)
    }

    const handleGradeChange = function(e) {
        console.log(e.target.value)
        setGrade(e.target.value);
        props.formData.set("grade", e.target.value)
    }

    


    return (
        <form>
            <ParishSelect parishes={props.parishes} setParishId={handleParishChange} parishId={parishId}/>
            <FormGroup>
                <TextField 
                    id="Name" 
                    label="Name" 
                    variant="outlined" 
                    onChange={handleNameChange}
                />
                <NumberSelect 
                    value={score} 
                    handleChange={handleScoreChange} 
                    min={0}
                    max={props.maxScore}
                    label="Score"
                    id="score-select"
                />
                <NumberSelect 
                    value={grade} 
                    handleChange={handleGradeChange} 
                    min={1}
                    max={12}
                    id="grade-select"
                    label="Grade"
                />
            </FormGroup>
            <Button onClick={props.submitForm}>Hello</Button>
        </form>
    )
}