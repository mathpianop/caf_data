import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper } from "@mui/material";
import GradeTablet from "./GradeTablet";

export default function CategoryTable(props) {
    


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#000000"}}>
                <TableRow >
                    <TableCell sx={{ fontWeight: "bold", color: "#ffffff"}} >Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "#ffffff"}} align="left">Parish</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "#ffffff"}} align="left">Score</TableCell>
                </TableRow>
            </TableHead>
                {Object.entries(props.grades).map(gradeGroupPair => {
                    return <GradeTablet key={gradeGroupPair[0]} gradeNumber={gradeGroupPair[0]} grades={gradeGroupPair[1]} />
                })}
            </Table>
    </TableContainer>
    )
}