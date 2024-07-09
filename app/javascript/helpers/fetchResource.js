

export default function fetchResource(resource, setter) {
    fetch(`/api/${resource}`, {
        method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            setter(data);
        })
        .catch((error) => console.log(error));
}