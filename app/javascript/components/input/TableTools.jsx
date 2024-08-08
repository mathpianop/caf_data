import React from "react"
import { FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, Grid} from "@mui/material";
import CustomButton from "./CustomButton";

export default function TableTools(props) {
    
    const handleJudgesChange = function(e) {
        props.updateNumOfJudges(e.target.value);
    }

    return (
        <Grid 
            container 
            alignItems="flex-end"
            spacing="10px"
        >
            <Grid item>
                <CustomButton onClick={() => props.setFormOpen(true)}>+ Add Entry</CustomButton>
            </Grid>
            <Grid item>
                <FormControl>
                    <FormLabel id="judges-radio-label">Number of Judges</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={props.numOfJudges}
                        name="radio-buttons-group"
                        row
                        onChange={handleJudgesChange}
                    >
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                    </RadioGroup>
                </FormControl>    
            </Grid>
        </Grid>
    )
}