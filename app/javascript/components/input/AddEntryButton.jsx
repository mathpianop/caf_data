import React from "react"
import { Button } from "@mui/material";

export default function AddEntryButton(props) {
    return (
        <Button 
            variant="contained" 
            onClick={() => props.setFormOpen(true)}
            sx={{
                bgcolor: "#000000",
                ml: "20px"
            }}
        >  
            + Add Entry
        </Button>
    )
}