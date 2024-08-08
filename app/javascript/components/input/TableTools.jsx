import React from "react"
import { FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, Grid} from "@mui/material";
import CustomButton from "./CustomButton";

import CsvButton from "./CsvButton";

export default function TableTools(props) {

    const handleJudgesChange = function(e) {
        props.updateNumOfJudges(e.target.value);
    }

    const csvButton = function() {
        if (props.spreadsheetURL) {
            return (
                <Grid item>
                    <CsvButton 
                        spreadsheetURL={props.spreadsheetURL}
                        categoryName={props.categoryName}
                    />
                </Grid>
            )
        }
    }

    const judges = function() {
        if (props.spreadsheetURL) {
            return (
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
            )
        }
    }

    


    return (
        <Grid 
            container 
            alignItems="flex-end"
            justifyContent="space-between"
            spacing="10px"
            sx={{mt: "20px"}}
        >
            <Grid item>
                <CustomButton onClick={props.openForm}>+ Add Entry</CustomButton>
            </Grid>
            {judges()}
            {csvButton()}
        </Grid>
    )
}