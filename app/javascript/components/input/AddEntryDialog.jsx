import React from "react";
import ParishSelect from "./ParishSelect";

export default function AddEntryDialog(props) {
   

    return (
        <Dialog onClose={props.handleClose} open={props.open}>
            <DialogTitle>Add Entry</DialogTitle>
            <DialogueContent>
                Name
                Grade
                Score
        
            </DialogueContent>
d        </Dialog>
    )
}