import React from "react";
import { Button } from "@mui/material";

export default function CustomButton(props) {
    return (
            <Button 
                variant="contained" 
                onClick={props.onClick}
                sx={{
                    bgcolor: "#000000",
                    m: "5px",
                    p: "2px",
                    minWidth: 30
                }}
            >  
                {props.children}
            </Button>
    )
}