import React from "react";
import {TextField, Button, Grid} from "@mui/material"
import useContactForm from "../../helpers/useContactForm";

export default function AddContactForm({contactForm}) {

      
    const fieldData = contactForm.fieldData;


    const closeForm = function() {
        contactForm.setFormOpen(false);
    }


    return (
        <form>
            <Grid container spacing={1}>
               <Grid item xs={6} sm={6} md={6}>
                    <TextField 
                        id="Name" 
                        label="Name" 
                        variant="outlined" 
                        onChange={e => fieldData.handleChange("name", e)}
                        sx={{width: "100%"}}
                        required
                    />  
               </Grid>

               <Grid item xs={6} sm={6} md={6}>
                    <TextField 
                        id="Email" 
                        label="Email" 
                        variant="outlined" 
                        onChange={e => fieldData.handleChange("email", e)}
                        sx={{width: "100%"}}
                        required
                    />  
               </Grid>
            </Grid>
            <Button onClick={closeForm}>Cancel</Button>
            <Button onClick={contactForm.submitForm} disabled={!fieldData.allFieldsFilled()}>Save</Button>
            
        </form>
    )
}