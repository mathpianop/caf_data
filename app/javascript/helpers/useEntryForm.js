import fetchResource from "./fetchResource";
import useForm from "./useForm";

export default function useEntryForm(category, setEntries, getEntries) {
    const addEntryFields = ["name", "grade", "score", "parishId"];
    const url = "/api/entries";

    const getSendableFormData = function(fieldData) {

        const formData = {
            name: fieldData.data.name,
            grade: fieldData.data.grade,
            parish_id: fieldData.data.parishId,
            category_id: category.id,
            score: fieldData.data.score
        }

        if (fieldData.data.id) {
            formData.id = fieldData.data.id
        }
        return JSON.stringify(formData)
    }


    const setEntry = function(entry) {
        form.fieldData.setFieldData({
            name: entry.name,
            grade: entry.grade,
            parishId: entry.parish_id,
            score: entry.score
        })
    }

    const openForm = function(entry) {
        if (entry) {
            setEntry(entry)
        }
        form.setFormOpen(true);
    }
    
    const onSuccess = function() {
        fetchResource("entries", setEntries);
    }
    
    const form = useForm(addEntryFields, url, getSendableFormData, onSuccess)

    const maxScore = function() {
        if (category.name === "art" || category.name === "photography") {
            return 48
        } else {
            return 60
        }
    }

    return {...form, maxScore, openForm, setEntries}

}