import React, { useState, useEffect } from "react";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {


    fetch("/api/contacts", {
      method: "GET",
      headers: {
        // "X-RapidAPI-Key": "your-api-key",
        // "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => console.log(error));
  }, []);

    return (

        <div className="Home">
        <ul>{contacts.map(contact => {
            return <li key={contact.id}>{`${contact.name}, ${contact.email}`}</li>
        })}</ul>
    </div>
    )
}