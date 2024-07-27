import React from "react";
import {TextField, Button, Grid} from "@mui/material";
import { useState } from "react";
export default function AddContactForm({contactForm}) {

    const [emailError, setEmailError] = useState(false);
    const [emailMessage, setEmailMessage] = useState("");

      
    const fieldData = contactForm.fieldData;


    const closeForm = function() {
        contactForm.setFormOpen(false);
    }

    const isValidEmail = function (string) {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return string.match(validRegex)
    }

    const validateEmail = function(e) {
        const invalidEmail = !isValidEmail(e.target.value);
        setEmailError(invalidEmail);
        setEmailMessage(invalidEmail ? "Please enter a valid email" : "");
    }

    const handleEmailChange = function(e) {
        fieldData.handleChange("email", e);
        if (emailError) {
            validateEmail(e);
        }
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
                        type="email"
                        label="Email" 
                        variant="outlined" 
                        onChange={handleEmailChange}
                        onBlur={validateEmail}
                        sx={{width: "100%"}}
                        required
                        helperText={emailMessage}
                        error={emailError}
                    />  
               </Grid>
            </Grid>
            <Button onClick={closeForm}>Cancel</Button>
            <Button onClick={contactForm.submitForm} disabled={!fieldData.allFieldsFilled()}>Save</Button>
            
        </form>
    )
}