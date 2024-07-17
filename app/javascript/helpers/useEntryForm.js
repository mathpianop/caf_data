import fetchResource from "./fetchResource";
import useForm from "./useForm";

export default function useEntryForm(category, setEntries) {
    const addEntryFields = ["name", "grade", "score", "parishId"];
    const url = "/api/entries";

    const getSendableFormData = function(fieldData) {
        return JSON.stringify({
            name: fieldData.data.name,
            grade: fieldData.data.grade,
            parish_id: fieldData.data.parishId,
            category_id: category.id,
            score: fieldData.data.score
        })
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

    return {...form, maxScore}

}