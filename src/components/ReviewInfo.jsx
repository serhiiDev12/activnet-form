import * as React from 'react';
import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";

export default function ReviewInfo() {
    const orderForm = useSelector(state => state.orderForm);
    const template = useSelector(state => state.template);
    const color = useSelector(state => state.color);

    console.log(template)

    return (
        <div className="review-info">
            {
                orderForm.map((form, index) => (
                    <div key={index}>
                        <h2>{form.title}</h2>
                        {
                            form.fields.map((item, index) => {
                                return (
                                    <div key={index + 1} className="review-info-field">
                                        <h4>{item.title}</h4> :
                                        <p>{item.value}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    );
}