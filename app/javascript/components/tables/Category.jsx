import React from "react";
import { useState } from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryTable from "./CategoryTable";
import {Box} from "@mui/material";


export default function Category(props) {

    const header = function() {
        if (props.summary) {
            return <CategoryHeader categoryName={props.categoryName}/>
        }
    }



    return (
        <Box 
            className="Category"
            mu={10}
            sx={{mt: "20px"}}
        >
            {header()}
            <CategoryTable grades={props.grades} />
        </Box>
    )
}