import fetchResource from "./fetchResource";


export default function destroyEntry(id, setEntries) {
    fetch(`/api/entries/${id}`, {
        method: "DELETE",
        })
        .then((response) => response.json())
        .then((data) => {
            fetchResource("entries", setEntries)
        })
        .catch((error) => console.log(error));
}