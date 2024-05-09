import * as React from 'react';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, TextField} from "@mui/material";
import {changeValue} from "../store";
import TemplateSelector from "../components/TemplateSelector";

export default function Designer() {
    return (
        <Box
            component="form"
            className="form"
            spacing={4}
            sx={{
                display: "block",
                p: 2,
                gap: 2
            }}
        >
            <h1 className="header">Help us identify your needs</h1>
                <TextField label="Name" />
                <TextField label="Email" />
                <TextField label="Phone" />
                <TextField label="website (if you want a redesign, otherwise leave blank)" />
                <TextField label="Company Name" />
                <TextField label="google maps of company location" />
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox />}
                    label={item.title}
                />
            </FormGroup>
        </Box>
    )
}