import React from "react";
import { TableContainer, Table, Paper } from "@mui/material";
import GenericTablet from "./GenericTablet"
import GenericTableHead from "./GenericTableHead";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";

export default function ParishTable(props) {
    
   const columns = [["name"], ["grade"], ["rank"], ["score"]]

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
            <GenericTableHead columns={columns}/>
            {Object.entries(props.categories).map(categoryPair => {
                return <GenericTablet 
                            subCategory={capitalizeFirstLetter(categoryPair[0])} 
                            key={categoryPair[1][0].id}
                            columns={columns} 
                            collections={categoryPair[1]}
                        />
            })}
            </Table>
    </TableContainer>
    )
}