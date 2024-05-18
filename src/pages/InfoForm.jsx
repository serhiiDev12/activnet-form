import * as React from 'react';
import './info-form.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {sendOrder} from "../service";
import Loading from "./Loading";
import {Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, TextField} from "@mui/material";
import {changeValue} from "../store";
import {ArrowBack, Done} from "@mui/icons-material";

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

export default function InfoForm() {
    const orderForm = useSelector(state => state.orderForm);
    const template = useSelector(state => state.template);
    const color = useSelector(state => state.color);
    const dispatch = useDispatch();
    const [step, setStep] = useState(0);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [listOfInvalidFields, setListOfInvalidFields] = useState([]);
    let navigate = useNavigate();

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
    const isControlled = (fieldId) => {
        var group = orderForm.find(item => item.fields.find(field => field.id === fieldId))
        return !group.fields.find(item => item.id === fieldId).value
    }
    const onSendOrder = async () => {
        if (emailInvalid || phoneInvalid) {
            return;
        }
        if (validateForm()) {
            setShowLoading(true)
            const statusOk = await sendOrder(orderForm, template, color);
            setShowLoading(false)
            navigate('/success');
        }
    }

    return (
        <>
            {
                showLoading &&
                <Loading/>
            }
            <div className="info-form">
                <div className="steps">
                    <button className="back-futton-info" onClick={() => navigate('/website-viewer')}>
                        <ArrowBack fontSize="large" />
                        BACK
                    </button>
                    <div className="info-form-steps">
                        {orderForm.map((item, index) => (
                            <React.Fragment key={index}>

                                <div className={"step " + +(step >= index && "current-step")}>
                                    <div className={"step-number " + (step >= index && "current-step")}>
                                        <p className={(step >= index && "current-step-text")}>
                                            {(step > index ? <Done sx={{color: "#bdf3b7"}} fontSize="large" /> : index + 1)}
                                        </p>
                                    </div>
                                    <h3 className={(step >= index && "current-step-text")}>{item.title}</h3>
                                </div>
                                {
                                    orderForm.length - 1 !== index &&
                                    <>
                                        <div className={"dot " + (step > index && 'current-step-dot')}></div>
                                        <div className={"dot " + (step > index && 'current-step-dot')}></div>
                                        <div className={"dot " + (step > index && 'current-step-dot')}></div>
                                    </>
                                }
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="centered-form">
                    <Box
                        component="form"
                        className="form"
                        spacing={4}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            p: 2,
                            gap: "15px"
                        }}
                    >
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
                                                sx={{width: '100%'}}
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
                                                sx={{width: '100%'}}
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
                                                sx={{width: '100%'}}
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
                                                sx={{width: '100%'}}
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
                                                sx={{width: '100%'}}
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
                    </Box>
                </div>
            </div>
        </>
    );
}