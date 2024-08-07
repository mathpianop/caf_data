import fetchResource from "./fetchResource";
import useForm from "./useForm";

export default function useContactForm(parishId, setParishes) {
    
    const addContactFields = ["name", "email"];

    const url = "/api/contacts";
    const onSuccess = function() {
        fetchResource("parishes", setParishes);
    }
    
    const getSendableFormData = function(fieldData) {

        const formData = {
            name: fieldData.data.name,
            parish_id: parishId,
            email: fieldData.data.email
        }

        if (fieldData.data.id) {
            formData.id = fieldData.id
        }
        return JSON.stringify(formData)
    }

    return useForm(addContactFields, url, getSendableFormData, onSuccess)

}