import React from "react";

import {Select, MenuItem, FormControl, InputLabel} from "@mui/material"

export default function NumberSelect(props) {

    const arrayRange = (start, stop) =>
        Array.from(
        { length: (stop - start + 1)},
        (value, index) => (start + index).toString()
    );

    return (

        <FormControl fullWidth required>
            <InputLabel id={props.id}>{props.label}</InputLabel>
            <Select
                labelId={props.id}
                id={props.id}
                value={props.value}
                label={props.label}
                onChange={props.handleChange}
                >
                {arrayRange(props.min, props.max).map(num => {
                    return <MenuItem key={num} value={num}>{num}</MenuItem>
                })}

            </Select>
        </FormControl>
    )
}