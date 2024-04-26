import * as React from 'react';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, TextField, Typography} from "@mui/material";
import './styles.css'
import img from './Template1.jpg'
import { changeValue } from "../store";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendOrder} from "../service";
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

    const [step, setStep] = useState(0)
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [listOfInvalidFields, setListOfInvalidFields] = useState([]);

    const stepNext = () => {
        setStep(step + 1);
    }

    const stepBack = () => {
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

    const onSendOrder = () => {
        if (emailInvalid || phoneInvalid) {
            return;
        }
        console.log(validateForm())
        if (validateForm()) {
            sendOrder(orderForm)
        }
    }

    return (
        <div className="flex">
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
                                return(
                                    <TextField
                                        key={item.id}
                                        label={item.title}
                                        value={item.value}
                                        onBlur={() => validateEmail(item.value)}
                                        onChange={(e) =>{
                                            dispatch(changeValue({
                                                groupId: orderForm[step].id,
                                                fieldId: item.id,
                                                value: e.target.value
                                            }))}}
                                        error={emailInvalid}
                                        required={item.required}
                                    />
                                );
                            } else if (item.fieldType === 6) {
                                return(
                                    <TextField
                                        key={item.id}
                                        label={item.title}
                                        value={item.value}
                                        onChange={(e) =>{
                                            validatePhone(e.target.value)
                                            dispatch(changeValue({
                                                groupId: orderForm[step].id,
                                                fieldId: item.id,
                                                value: e.target.value
                                            }))}}
                                        error={phoneInvalid}
                                        onKeyDown={(e) => {
                                            if(!validPhoneInputCharacter(e)){
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
                    <Button variant="contained" onClick={stepNext} disabled={step === orderForm.length -1 }>Next</Button>
                </div>
                <Button variant="contained" className="submit" onClick={onSendOrder} disabled={emailInvalid || phoneInvalid}>Submit</Button>

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
                <div className="preview"><img className="template" src={img} alt=""/></div>
                <div className="color-picker-placeholder">
                    <div className="color-picker"></div>
                </div>
            </div>
        </div>

    );
}