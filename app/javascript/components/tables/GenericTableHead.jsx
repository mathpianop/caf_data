import React from "react"

import {TableHead, TableRow, TableCell} from "@mui/material"
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter"

export default function GenericTableHead(props) {
    return (
        <TableHead sx={{ backgroundColor: "#000000"}}>
                <TableRow>
                    <TableCell sx={{ fontWeight: "bold", color: "#ffffff" }}>+</TableCell>
                    {props.columns.map(column => {
                        return  <TableCell 
                                    sx={{ fontWeight: "bold", color: "#ffffff" }}
                                    align='left'
                                    key={column[0]}
                                >
                                    {capitalizeFirstLetter(column[0])}
                                </TableCell>
                    })}
                    
                </TableRow>
            </TableHead>
    )
}