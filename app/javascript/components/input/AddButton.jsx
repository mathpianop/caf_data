import React from "react";
import { Button } from "@mui/material";

export default function AddButton(props) {
    return (
        <Button 
            variant="contained" 
            onClick={props.onClick}
            sx={{
                bgcolor: "#000000",
                ml: "20px",
                mt: "10px"
            }}
        >  
            {props.text}
        </Button>
    )
}