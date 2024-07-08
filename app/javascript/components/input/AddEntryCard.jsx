import React from "react";
import {CardHeader, Card, CardContent} from "@mui/material";
import { Container } from "@mui/material";
import AddEntryForm from "./AddEntryForm";

export default function AddEntryCard(props) {
    return (
        <Container >
            <Card raised sx={{maxWidth: "sm"}}>
                <CardHeader
                    sx={{
                        bgcolor: "#000000",
                        color: "#ffffff"
                    }}
                    title="Add Entry"
                    titleTypographyProps={{variant:'h6' }}
                />
                <CardContent
                    sx={{
                        padding: "10px",
                    }}
                >
                    <AddEntryForm {...props} />
                </CardContent>
            </Card>
        </Container>
    )
}