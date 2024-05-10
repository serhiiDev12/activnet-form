import * as React from 'react';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, TextField} from "@mui/material";
import {changeValue} from "../store";
import TemplateSelector from "../components/TemplateSelector";
import {useEffect, useState} from "react";
import img from "./Template1.jpg";
import logo from "../logo.svg";
import {json, useNavigate} from "react-router-dom";
import {sendOrder} from "../service";
import {ArrowBack} from "@mui/icons-material";
import {Version as JSON} from "sass";

function validPhoneInputCharacter(input) {
    let keyCode = input.keyCode;

    if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105 || keyCode == 189 || keyCode == 8 || keyCode == 109 || keyCode == 9
        || keyCode == 67 && input.ctrlKey || keyCode == 65 && input.ctrlKey || keyCode == 90 && input.ctrlKey || keyCode == 88 && input.ctrlKey
        || keyCode == 86 && input.ctrlKey || keyCode == 36 || keyCode == 35 || keyCode == 13 || keyCode == 37 || keyCode == 39 || keyCode == 46
        || keyCode == 32 || keyCode == 187 && input.shiftKey) {
        return true;
    } else {
        return false;
    }
}
export default function Designer() {
    let navigate = useNavigate();
    const MaxSteps = 5;
    const [step, setStep] = useState(1);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [inquiryObject, setInquiryObject] = useState({
        brief: "",
        name: "",
        email: "",
        phone: "",
        website: "",
        companyName: "",
        mapsLocation: "",
        ownDomain: "",
        ownImages: false,
        contactForm: false,
        iWantLogo: false,
        description: ""
    });

    const stepNext = () => {
        setStep(step + 1);
    }

    const stepBack = () => {
        setStep(step - 1);
    }

    useEffect(() => {
        const form = localStorage.getItem('form');
        if (form) {
            const parsedForm = JSON.parse(form);
            setInquiryObject(parsedForm);
        }
    }, [navigate]);

    const onSendOrder = async () => {
        if (emailInvalid || phoneInvalid) {
            return;
        }
        const statusOk = await sendOrder(inquiryObject);
    }

    const saveValueToLocalStorage = () => {

    }
    const goHome = () => {
        navigate('/')
    }

    const changeValue = (key, value) => {
        const inquiry = {...inquiryObject};
        inquiry[key] = value;
        setInquiryObject(inquiry);
        saveValueToLocalStorage();
        navigate('/success');
    }

    return (
        <Box
            component="form"
            className="form-design"
            spacing={4}
            sx={{
                p: 2,
                gap: 2
            }}
        >
            <div className="navbar-withback" onClick={goHome}>
                <ArrowBack fontSize="large" />BACK</div>
            <div className="form-designer-in">
                {
                    step === 1 &&
                    <>
                        <h3>Get started</h3>
                        <TextField
                            value={inquiryObject.brief}
                            onChange={e =>
                                changeValue("brief", e.target.value)}
                            label="Brief description of job to be done"
                        />
                    </>
                }
                {
                    step === 2 &&
                    <>
                        <h4>Contact Info</h4>
                        <TextField
                            value={inquiryObject.name}
                            onChange={e => changeValue("name", e.target.value)}
                            label="Name"
                        />
                        <TextField
                            value={inquiryObject.email}
                            onChange={e => changeValue("email", e.target.value)}
                            label="Email"
                        />
                        <TextField
                            value={inquiryObject.phone}
                            onKeyDown={(e) => {
                                if (!validPhoneInputCharacter(e)) {
                                    e.preventDefault();
                                }
                            }}

                            onChange={e =>{
                                if (!validPhoneInputCharacter(e)) {
                                    changeValue("phone", e.target.value)
                                }
                            }
                        }
                            label="Phone"
                        />
                    </>
                }
                {
                    step === 3 &&
                    <>
                        <h4>Company info</h4>
                        <TextField value={inquiryObject.website}
                                   onChange={e =>
                                       changeValue("website", e.target.value)}
                                   label="Website link (if you want a redesign, otherwise leave blank)"
                        />
                        <TextField
                            value={inquiryObject.companyName} onChange={e =>
                            changeValue("companyName", e.target.value)}
                            label="Company Name"
                        />
                        <TextField
                            value={inquiryObject.mapsLocation}
                            onChange={e =>
                                changeValue("mapsLocation", e.target.value)}
                            label="google maps of company location"
                        />
                    </>

                }
                {
                    step === 4 &&
                    <>
                        <h4>Final Configuration</h4>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox
                                    value={inquiryObject.ownImages}
                                    onChange={e =>
                                        changeValue("ownImages", e.target.checked)}
                                />}
                                label="I want to provide my own images"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox
                                    value={inquiryObject.contactForm}
                                    onChange={e =>
                                        changeValue("contactForm", e.target.checked)}
                                />}
                                label="I want to include contact form"
                            />
                        </FormGroup>
                    </>
                }
                {
                    step === 5 &&
                    <>
                        <h4>Final Comments</h4>
                        <TextField
                            value={inquiryObject.description}
                            label="Prefferences"
                            multiline
                            rows={6}
                            onClick={e =>
                                changeValue("description", e.target.value)}
                        />
                    </>
                }
                <div className="stepper-design">
                    <Button onClick={stepBack} disabled={step === 1}>Back</Button>
                    {
                        step === MaxSteps ?
                            <Button variant="contained"
                                    className="submit"
                                    onClick={onSendOrder}
                                    sx={{backgroundColor: "#4FAA89"}}
                                    disabled={emailInvalid || phoneInvalid}>Submit</Button>
                            : <Button variant="contained"
                                      sx={{backgroundColor: "#4FAA89"}}
                                      onClick={stepNext}>Next</Button>
                    }
                </div>
            </div>
        </Box>
    )
}