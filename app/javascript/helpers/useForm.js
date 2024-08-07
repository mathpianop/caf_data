import useFieldData from "./useFieldData";
import { useState } from "react";

export default function useForm(fields, url, getSendableFormData, onSuccess) {

    const fieldData = useFieldData(fields);
    const [formOpen, setFormOpen] = useState(false);
    

    const setFields = function(fields) {
        fieldData.setFieldData(fields);
    }

    const method = function() {
        return (fieldData.data.id ? "PATCH" : "POST");
    }

    const finalUrl = function() {   
        return (fieldData.data.id ? url + `/${fieldData.data.id}` : url)
    }

    const submitForm = function() {
        console.log(fieldData, method());
        fetch(finalUrl(), {
            method: method(),
            headers: {
                "Content-Type": "application/json",
                },
            body: getSendableFormData(fieldData)
            })
            .then((response) => response.json())
            .then((data) => {
                onSuccess()
                setFormOpen(false);
            })
            .catch((error) => console.log(error));
    }

    

    return {
        submitForm, 
        fieldData, 
        formOpen, 
        setFormOpen, 
        setFields, 
        clearData: fieldData.clearData
    }

}