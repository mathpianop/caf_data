import React from "react";

import { useState } from "react";

export default function useFieldData(fields) {

 
    const blankDataFields = function() {
        return fields.reduce((data, field) => {
            data[field] = "";
            return data;
        }, {})
    }

 

    const [fieldData, setFieldData] = useState(blankDataFields());


    const clearData = function() {
        setFieldData(blankDataFields())
    }
    
    const updateFieldData = function(field, value) {
        setFieldData(data => {
            const newData = {...data}
            newData[field] = value;
            return newData
        });
    }

    const handleChange = function(field, e) {
        updateFieldData(field, e.target.value)
    }

    const allFieldsFilled = function() {
        return Object.values(fieldData).every(field => field && field !== "")
    }

    

    return {
        data: fieldData,
        handleChange,
        allFieldsFilled,
        setFieldData,
        clearData
    }
}