import React from "react";
import AddCard from "./AddCard";
import AddContactForm from "./AddContactForm";
import AddButton from "./AddButton";
import useContactForm from "../../helpers/useContactForm";
import { Box } from "@mui/material";
import {useEffect} from "react"

export default function ParishContact({parish, setParishes}) {


  const setNewFields = function(formObject) {

    if (parish.contact) {
      formObject.setFields({
        name: parish.contact.name,
        email: parish.contact.email,
        id: parish.contact.id
      })
    } else {
      formObject.clearData()
    }
  }




    const contactForm = useContactForm(parish.id, setParishes);

   

    const contactInfo = function() {
        if (parish.contact && !contactForm.formOpen) {
            return (
              <Box>
                <span>{`Contact: ${parish.contact.name}, ${parish.contact.email}`}</span>
                <AddButton text="Edit" onClick={() => contactForm.setFormOpen(true)}/>
              </Box>
            )
          }
            
    }

    const form = function() {
      if (contactForm.formOpen) {
        return (
          <AddCard title="Parish Contact">
            <AddContactForm contactForm={contactForm}/>
          </AddCard>
        )
      } else if (!contactForm.formOpen && !parish.contact) {
        return (
          <AddButton text={"+ Add Contact"} onClick={() => contactForm.setFormOpen(true)}/>
        )
      }
     
    }

    useEffect(() => {
      contactForm.setFormOpen(false);
      setNewFields(contactForm);
    }, [parish]);

    useEffect(() => {
        setNewFields(contactForm)
    }, [])

      

    return (
        <div className="Parish Contact">
              {contactInfo()}
              {form()}
        </div>
    )
}