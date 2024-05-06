import * as React from 'react';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, TextField, Typography} from "@mui/material";
import './styles.css'
import img from './Template1.jpg'
import { changeValue } from "../store";
import {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendOrder} from "../service";
import {useNavigate} from "react-router-dom";
import Loading from "./Loading";
import logo from "../logo.svg";
import TemplateSelector from "../components/TemplateSelector";
import template1 from "../components/Template1.png";
import template2 from "../components/Template2.png";
import template3 from "../components/Template3.png";

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

export default function InquiryForm() {
    const orderForm = useSelector(state => state.orderForm);
    const dispatch = useDispatch();
    const ref = useRef();

    const [selectedTemplate, setSelectedTemplate] = useState(1)
    const [selectedRoute, setSelectedRoute] = useState("/order-website/templateOne")
    const [step, setStep] = useState(0)
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [listOfInvalidFields, setListOfInvalidFields] = useState([]);
    const [scrollHeight, setScrollHeight] = useState("");
    const [showLoading, setShowLoading] = useState(true)
    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate]);

    useEffect( () => {
        setShowLoading(true);
        setTimeout(() => {
            setShowLoading(false)
        }, 500)
    }, [navigate])

    const goHome = () => {
        navigate('/')
    }

    const stepNext = () => {
        if (listOfInvalidFields.length > 0)
            validateForm()
        setStep(step + 1);
    }

    const stepBack = () => {
        if (listOfInvalidFields.length > 0)
            validateForm()
        setStep(step - 1);
    }

    const validateEmail = (value) => {
        if (value === "") {
            setEmailInvalid(false)
        }
        const reg = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        setEmailInvalid(!reg.test(value));
    }

    const validatePhone = (value) => {
        const reg = new RegExp("/^[\\\\+]?[(]?[0-9]{3}[)]?[-\\\\s\\\\.]?[0-9]{3}[-\\\\s\\\\.]?[0-9]{4,6}$/im");
        setEmailInvalid(!!reg.test(value));
    }

    const onLoad = () => {
        setTimeout(() => {
            setScrollHeight(window.innerHeight -195 + 'px')
        }, 0)
    }

    const validateForm = () => {
        let requiredFieldsArr = [];
        orderForm.forEach(item => {
            item.fields.map(item => {
                if (item.required && item.value === "") {
                    requiredFieldsArr.push(item);
                }
            })
        })
        setListOfInvalidFields(requiredFieldsArr)

        return requiredFieldsArr.length === 0;
    }

    const isControlled = (fieldId) => {
        var group = orderForm.find(item => item.fields.find(field => field.id === fieldId))
        return !group.fields.find(item => item.id === fieldId).value
    }

    const templates = [
        {id: 1, src: template1, route: '/order-website/templateOne'},
        {id: 2, src: template2, route: '/order-website/templateTwo'},
        {id: 3, src: template3, route: '/order-website/templateThree'}
    ]

    const onSendOrder = async () => {
        if (emailInvalid || phoneInvalid) {
            return;
        }
        if (validateForm()) {
            setShowLoading(true)
            const statusOk = await sendOrder(orderForm);
            setShowLoading(false)
        }
    }

    const selectTemplate = (id) => {
        setSelectedTemplate(id);
        setSelectedRoute(templates.find(item => item.id === id).route)
    }

    const openTemplate = () => {
        navigate(`${selectedRoute}/false`);
    }

    return (
        <div>
            {
                showLoading &&
                <Loading />
            }
            <div className="flex">
                <nav>
                    <img className="activnet" src={logo} alt="ActivNet" onClick={goHome}/>
                    <a onClick={goHome}>HOME</a>
                </nav>
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
                    <div>
                        <h3>{orderForm[step].title}</h3>
                        <p>{orderForm[step].subtitle}</p>
                        <div className="form-flex-box">{
                            orderForm[step].fields.map(item => {
                                if (item.fieldType === 1) {
                                    return (
                                        <TextField
                                            key={item.id}
                                            label={item.title}
                                            value={item.value}
                                            onChange={(e) =>
                                                dispatch(changeValue({
                                                    groupId: orderForm[step].id,
                                                    fieldId: item.id,
                                                    value: e.target.value
                                                }))}
                                            required={item.required}
                                        />
                                    );
                                } else if (item.fieldType === 2) {
                                    return (
                                        <TextField
                                            key={item.id}
                                            label={item.title}
                                            value={item.value}
                                            onChange={(e) => dispatch(changeValue({
                                                groupId: orderForm[step].id,
                                                fieldId: item.id,
                                                value: e.target.value
                                            }))}
                                            multiline
                                            rows={4}
                                            required={item.required}
                                        />
                                    );
                                } else if (item.fieldType === 3) {
                                    return (
                                        <FormGroup key={item.id}>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={item.value}
                                                    onChange={(e) =>
                                                        dispatch(changeValue({
                                                            groupId: orderForm[step].id,
                                                            fieldId: item.id,
                                                            value: e.target.checked
                                                        }))}/>}
                                                label={item.title}
                                            />
                                        </FormGroup>
                                    );
                                } else if (item.fieldType === 4) {
                                    return (
                                        <TextField
                                            key={item.id}
                                            label={item.title}
                                            value={item.value}
                                            onChange={(e) => dispatch(changeValue({
                                                groupId: orderForm[step].id,
                                                fieldId: item.id,
                                                value: e.target.value
                                            }))}
                                            select
                                            disabled={item.controlledBy && isControlled(item.controlledBy)}
                                            required={item.required}
                                        >
                                            {item.selections.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    );
                                } else if (item.fieldType === 5) {
                                    return (
                                        <TextField
                                            key={item.id}
                                            label={item.title}
                                            value={item.value}
                                            onBlur={() => validateEmail(item.value)}
                                            onChange={(e) => {
                                                dispatch(changeValue({
                                                    groupId: orderForm[step].id,
                                                    fieldId: item.id,
                                                    value: e.target.value
                                                }))
                                            }}
                                            error={emailInvalid}
                                            required={item.required}
                                        />
                                    );
                                } else if (item.fieldType === 6) {
                                    return (
                                        <TextField
                                            key={item.id}
                                            label={item.title}
                                            value={item.value}
                                            onChange={(e) => {
                                                validatePhone(e.target.value)
                                                dispatch(changeValue({
                                                    groupId: orderForm[step].id,
                                                    fieldId: item.id,
                                                    value: e.target.value
                                                }))
                                            }}
                                            error={phoneInvalid}
                                            onKeyDown={(e) => {
                                                if (!validPhoneInputCharacter(e)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            required={item.required}
                                        />
                                    );
                                }
                            })
                        }</div>
                    </div>
                    <div className="stepper">
                        <Button onClick={stepBack} disabled={step === 0}>Back</Button>
                        {
                            step === orderForm.length - 1 ?
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
                    <TemplateSelector selectedTemplateId={selectedTemplate} selectTemplate={selectTemplate} templates={templates} />
                    {listOfInvalidFields.length > 0 &&
                        <div>
                            <h4 className="error">You have problem with following fields</h4>
                            <ul className="error">
                                {listOfInvalidFields.map((item, index) => <li key={item.title + index}
                                                                              style={{color: "red"}}>
                                    {item.title}
                                </li>)}
                            </ul>
                        </div>}
                </Box>
                <div className="website-preview">
                    <div className="preview-label">
                        <h3>Website preview</h3>
                    </div>
                    <div className="preview">
                        <iframe
                            ref={ref}
                            id="frame"
                            className="website-preview-frame"
                            src={"http://localhost:3000" + selectedRoute + "/true"}
                            frameBorder={0}
                            height={scrollHeight}
                            onLoad={onLoad}></iframe>
                        <Button
                            variant="contained"
                            onClick={openTemplate}
                            className="floating-button"
                            sx={{width: "100%", backgroundColor: "#4FAA89"}}>
                            View Website
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}