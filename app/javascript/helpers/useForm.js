import useFieldData from "./useFieldData";
import { useState } from "react";

export default function useForm(fields, url, getSendableFormData, onSuccess) {

    const fieldData = useFieldData(fields);
    const [formOpen, setFormOpen] = useState(false)


    const submitForm = function() {
        console.log(fieldData)
        fetch(url, {
            method: "POST",
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

    

    return {submitForm, fieldData, formOpen, setFormOpen}

}