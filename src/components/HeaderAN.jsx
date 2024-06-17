import * as React from 'react';
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import lightbulb from './lightbulb.svg'
import logo from './logo.svg'
import ScrollAnimation from "react-animate-on-scroll";
import {useNavigate} from "react-router-dom";

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

    const navigate = useNavigate();
    const [email, emailChange] = useState("");

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 10)
    })

    return (
        <div id="about" className="main-page-header">
            <div className="header-img-format">
                <div className="header-text">
                    <div className="h1-title">
                        <h1 style={{color: show ? "white": "transparent"}}>UI DESIGN. WEB DEVELOPMENT. MAINTENANCE.</h1>
                    </div>
                    <div className="become-client">
                        <h1 style={{color: show ? "white": "transparent"}}>GET YOUR WEBSITE NOW WITH ACTIVNET TECH</h1>
                        <div className="become-client-form">
                            <button onClick={() => navigate('/website-viewer')}>Try Free Templates</button>
                            <button onClick={props.openPopover}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}