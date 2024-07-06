import React from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function ParishSelect(props) {



    const handleChange = function(e) {
        props.setParishId(e.target.value)
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="parish-select-label">Parish</InputLabel>
            <Select
            labelId="parish-select-label"
            id="parish-select"
            value={props.parishId}
            label="Parish"
            onChange={handleChange}
            >
                {props.parishes.map(parish => {
                    return <MenuItem key={parish.id} value={parish.id}>{parish.name}</MenuItem>
                })}

            </Select>
        </FormControl>
    )
}