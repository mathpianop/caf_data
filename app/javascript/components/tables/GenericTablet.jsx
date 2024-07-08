import React from "react";
import {TableHead, TableBody, TableRow, TableCell} from "@mui/material";

export default function Tablet(props) {
    const getColumnData = function(entry, column) {
        if (column.length === 1) {
            return entry[column[0]]
        } else {
            return entry[column[0]][column[1]]
        }
    }
    return (
           
            <TableBody>
            <TableRow sx={{ backgroundColor: "#999999"}}>
                    <TableCell 
                        align="center" 
                        colSpan={props.columns.length} 
                        sx={{ color: "#ffffff"}}
                    >  
                        {props.subCategory}
                    </TableCell>
                </TableRow>
            {props.collections.map((entry) => (
                <TableRow
                key={entry.name + entry.grade + entry.parish.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    {/* <TableCell></TableCell> */}
                    {props.columns.map((column, index) => {
                        return <TableCell key={entry.id + index} align="left">{getColumnData(entry, column)}</TableCell>
                    })}
                </TableRow>
            ))}
            <TableRow></TableRow>
            </TableBody>
    )
}