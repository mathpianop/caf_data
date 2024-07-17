import React from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function ParishSelect(props) {


    return (
        <FormControl fullWidth required>
            <InputLabel id="parish-select-label">Parish</InputLabel>
            <Select
            labelId="parish-select-label"
            id="parish-select"
            value={props.parishId}
            label="Parish"
            onChange={props.onChange}
            required={props.required}
            >
                {props.parishes.map(parish => {
                    return <MenuItem key={parish.id} value={parish.id}>{parish.name}</MenuItem>
                })}

            </Select>
        </FormControl>
    )
}