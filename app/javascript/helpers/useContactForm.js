import fetchResource from "./fetchResource";
import useForm from "./useForm";

export default function useContactForm(parishId) {

    
    const addContactFields = ["name", "email"];

    const url = "/api/contacts";
    const onSuccess = function() {
        fetchResource("parishes", setParishes);
    }
    
    const getSendableFormData = function(fieldData) {
        return JSON.stringify({
            name: fieldData.data.name,
            parish_id: parishId,
            email: fieldData.email
        })
    }

    


    return useForm(addContactFields, url, getSendableFormData, onSuccess)

}