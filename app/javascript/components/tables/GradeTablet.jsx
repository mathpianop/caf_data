import React from "react";
import {TableHead, TableBody, TableRow, TableCell} from "@mui/material";

export default function GradeTablet(props) {
    return (
           
            <TableBody>
            <TableRow sx={{ backgroundColor: "#999999"}}>
                    <TableCell align="center" colSpan={4} sx={{ color: "#ffffff"}}>{`Grade ${props.gradeNumber}`}</TableCell>
                </TableRow>
            {props.grades.map((entry) => (
                <TableRow
                key={entry.name + entry.grade + entry.parish.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {entry.name}
                    </TableCell>
                    <TableCell align="left">{entry.parish.name}</TableCell>
                    <TableCell align="left">{entry.score}</TableCell>
                </TableRow>
            ))}
            <TableRow></TableRow>
            </TableBody>
    )
}