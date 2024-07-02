import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="Menu">
            <Link to="/contacts">Contacts</Link>
            <Link to="/parishes">Parishes</Link>
        </div>
    
    )

}