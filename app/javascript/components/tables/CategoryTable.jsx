import React from "react";
import { TableContainer, Table, Paper } from "@mui/material";
import Tablet from "./GenericTablet"
import GenericTableHead from "./GenericTableHead";

export default function CategoryTable(props) {
    
   const columns = [["name"], ["rank"], ["parish", "name"], ["score"], ["ribbon"]]

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} size="small" aria-label="simple table">
            <GenericTableHead columns={columns}/>
                {Object.entries(props.grades).map(gradeGroupPair => {
                    return <Tablet 
                                subCategory={`Grade ${gradeGroupPair[0]}`} 
                                key={gradeGroupPair[1][0].id}
                                columns={columns} 
                                collections={gradeGroupPair[1]}
                                entryForm={props.entryForm}
                            />
                })}
            </Table>
    </TableContainer>
    )
}