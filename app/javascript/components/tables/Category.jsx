import React from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryTable from "./CategoryTable";
import {Box} from "@mui/material";

export default function Category(props) {
    console.log(props)
    return (
        <Box 
            className="Category"
            mu={10}
            sx={{mt: "20px"}}
        >
            <CategoryHeader categoryName={props.categoryName}/>
            <CategoryTable grades={props.grades} />
        </Box>
    )
}