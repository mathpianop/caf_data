import React from "react";
import CustomButton from "./CustomButton";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";

export default function CsvButton(props) {

    const fileName = function() {
        if (props.categoryName) {
            return `${capitalizeFirstLetter(props.categoryName)}.csv`
        } else {
            return "Summary.csv"
        }
    }
    return <CustomButton>
    <a 
       href={props.spreadsheetURL}
       style={{textDecoration: "none",  color: "inherit"}}
       download={fileName()}
    >
        Download CSV
   </a>
</CustomButton>
}