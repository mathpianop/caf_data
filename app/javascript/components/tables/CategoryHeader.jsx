import React from "react";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";

export default function CategoryHeader(props) {
    return <h3>{capitalizeFirstLetter(props.categoryName)}</h3>
}