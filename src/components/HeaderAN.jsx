import * as React from 'react';
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import lightbulb from './lightbulb.svg'
import logo from './logo.svg'

const renderStuff = [
    {
        id: 11,
        title: "Grow your business with ActivNet",
        subtext: "Get your cheap website and start don't worry about maintaining and changing it. Our value - satisfied customer",
        src: "https://images.unsplash.com/photo-1509339022327-1e1e25360a41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        title: "We cover your back",
        subtext: "ActivNet team don't believe in pushing their clients to build a website themselves and spend lot's of time making it run. All that so you can focus on your business while we cover your back",
        src: "https://images.unsplash.com/photo-1594402919317-9e67dca0a305?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        title: "Delivering Assurance",
        subtext: "We constantly monitor your website status and making sure your website is always accessible",
        src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

export default function Header(props) {

    const [email, emailChange] = useState("")

    return (
        <div id="about" className="main-page-header">
            <div className="header-img-format">
                <div className="header-text">
                    <button className="contact-buttom" onClick={() => props.openPopover("")}>CONTACT US</button>
                    <div className="h1-title">
                        <h1>DESIGN.<br/> DEVELOPMENT.<br/> MAINTENANCE.<br/></h1>
                    </div>
                    <div className="become-client">
                        <h1>FREE CONSULTATION</h1>
                        <p>Let's discuss best option for you</p>
                        <div className="become-client-form">
                            <input
                                className="header-text-form"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => emailChange(e.target.value)}
                            />
                            <div
                                onClick={() => props.openPopover(email)}
                                className="header-text-form-button">
                                <ArrowForward/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lightbulb">
                    <img src={lightbulb} alt=""/>
                </div>
            </div>
        </div>
    );
}