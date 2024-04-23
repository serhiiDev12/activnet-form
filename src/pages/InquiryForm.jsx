import * as React from 'react';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";
import './styles.css'
import img from './Template1.jpg'
export default function InquiryForm() {


    React.useEffect(() => {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('nav a');

        const handleScroll = () => {
            if (window.scrollY > 20) {
                nav.classList.add('scroll');
                navLinks.forEach(link => link.classList.add('scroll'));
            } else {
                nav.classList.remove('scroll');
                navLinks.forEach(link => link.classList.remove('scroll'));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="flex">
            <Box
                component="form"
                className="form"
                spacing={4}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    gap: 2
                }}
            >
                <h1 className="header">Help us identify your needs</h1>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    required
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    required />
                <TextField
                    id="description"
                    label="Business Description"
                    multiline
                    required
                    rows={5}
                    variant="outlined"
                />
                <TextField
                    id="achievements"
                    label="Achievements you're most proud of"
                    multiline
                    required
                    rows={3}
                    variant="outlined"
                />
                <TextField
                    id="achievements"
                    label="Add example of metrics you recently reached (optional)"
                    multiline
                    rows={3}
                    variant="outlined"
                />
                <TextField
                    id="values"
                    label="Your company Goals and Values"
                    multiline
                    required
                    rows={3}
                    variant="outlined"
                />
                <TextField
                    id="location"
                    label="Google maps location or reviews (optional)"
                    variant="outlined"
                />
                <TextField
                    id="preferences"
                    label="Any other preferences or changes you want to make to your website structure? (optional)"
                    multiline
                    rows={3}
                    variant="outlined"
                />
                <TextField
                    id="social-media"
                    label="List social medias of the company (optional)"
                    multiline
                    rows={3}
                    variant="outlined"
                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked required />} label="I understand that result can be different" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I want to provide my own images for website" />

                    <FormControlLabel control={<Checkbox defaultChecked />} label="I want to provide my own text for website" />
                </FormGroup>
                <Button variant="contained">Submit</Button>
            </Box>
            <div className="website-preview">
                <div className="preview"><img className="template" src={img} alt=""/></div>
                <div className="color-picker-placeholder">
                    <div className="color-picker"></div>
                </div>
            </div>
        </div>

    );
}