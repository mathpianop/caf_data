import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";





export default function Home() {

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
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

    return (

        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <h1 className="display-4">Sport exercises</h1>
                <p className="lead">
                    A list of sport exercises to boost your workout.
                </p>
                <hr className="my-4" />
                <Link
                    to="/exercises"
                    className="btn btn-lg custom-button"
                    role="button"
                >
                    View Exercises
                </Link>
            </div>
        </div>

        <h2>Contacts</h2>
        <ul>{contacts.map(contact => {
            console.log(contact);
            return <li>{`${contact.name}, ${contact.email}`}</li>
        })}</ul>

    </div>
    )
}