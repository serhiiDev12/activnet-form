import * as React from 'react';
import {Card, TextField} from "@mui/material";

export default function ContactForm() {
    return (
        <div className="template-three-contact-form-background">
            <Card className="template-three-contact-form">
                <h4>CONTACT US</h4>
                <div className="template-three-contact-form-name">
                    <TextField sx={{color: "var(--primary-color)"}} label="First Name"/>
                    <TextField sx={{color: "var(--primary-color)"}} label="Last Name"/>
                </div>
                <TextField sx={{width: "100%", color: "var(--primary-color)"}} label="Email"/>
                <button className="template-three-contact-form-button">SUBMIT</button>
            </Card>
        </div>
    );
}