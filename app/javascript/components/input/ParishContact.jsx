import React from "react";
import AddCard from "./AddCard";
import AddContactForm from "./AddContactForm";
import AddButton from "./AddButton";
import useContactForm from "../../helpers/useContactForm";
import { Box } from "@mui/material";

export default function ParishContact({parish, setParishes}) {

    const contactForm = useContactForm(parish.id, setParishes);

    const content = function() {
        if (parish.contact) {
            return (
              <Box>
                {`Contact: ${parish.contact.name}, ${parish.contact.email}`}
              </Box>
            )
          } else {
            if (contactForm.formOpen) {
              return (
                <AddCard title="Add Parish Contact">
                  <AddContactForm contactForm={contactForm}/>
                </AddCard>
              )
            } else {
              return (
                <AddButton text={"+ Add Contact"} onClick={() => contactForm.setFormOpen(true)}/>
              )
            }
           
          }
    }

      

    return (
        <div className="Parish Contact">
              {content()}
        </div>
    )
}