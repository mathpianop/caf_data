import React from "react";
import { useState, useEffect } from "react";
import ParishSelect from "./ParishSelect";
import {TextField, Button, Grid} from "@mui/material"
import NumberSelect from "./NumberSelect";
import fetchResource from "../../helpers/fetchResource";

export default function AddEntryForm({entryForm}) {


    const [parishes, setParishes] = useState();

    const fieldData = entryForm.fieldData;


    const closeForm = function() {
        entryForm.setFormOpen(false);
    }

    const parishSelect = function() {
    
        if (parishes) {
            return (
                <ParishSelect 
                parishes={parishes} 
                onChange={(e) => fieldData.handleChange("parishId", e)} 
                parishId={fieldData.data.parishId}
                required={true}
                />
            )
        }

     }   

     useEffect(() => {
        fetchResource("parishes", setParishes)
     }, [])


    return (
        <form>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                   {parishSelect()}
                </Grid>

               <Grid item xs={6} sm={6} md={6}>
                    <TextField 
                        id="Name" 
                        label="Name" 
                        variant="outlined" 
                        value={fieldData.data.name}
                        onChange={e => fieldData.handleChange("name", e)}
                        sx={{width: "100%"}}
                        required
                    />  
               </Grid>

               <Grid item xs={4} sm={3} md={3}>
                    <NumberSelect 
                        value={fieldData.data.score} 
                        handleChange={e => fieldData.handleChange("score", e)} 
                        min={0}
                        max={entryForm.maxScore()}
                        label="Score"
                        id="score-select"
                    />
               </Grid>

               <Grid item xs={4} sm={3} md={3}>
                    <NumberSelect 
                        value={fieldData.data.grade} 
                        handleChange={e => fieldData.handleChange("grade", e)} 
                        min={1}
                        max={12}
                        id="grade-select"
                        label="Grade"
                    />
               </Grid>
            </Grid>
            <Button onClick={closeForm}>Cancel</Button>
            <Button onClick={entryForm.submitForm} disabled={!fieldData.allFieldsFilled()}>Save</Button>
            
        </form>
    )
}