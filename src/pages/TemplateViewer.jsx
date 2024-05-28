import * as React from 'react';
import tmp1 from "../components/Template1.png";
import tmp2 from "../components/Template2.png";
import tmp3 from "../components/Template3.png";
import {useEffect, useRef, useState} from "react";
import TemplateOne from "../websites/template1/TemplateOne";
import TemplateTwo from "../websites/template2/TemplateTwo";
import TemplateThree from "../websites/template3/TemplateThree";
import './template-viewer.css'
import {Button, LinearProgress} from "@mui/material";
import {ArrowBack, ArrowForward, DoneOutline, ErrorOutline, Web} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import Loading from "./Loading";
import ColorPalette, { colors } from "../components/ColorPalette";
import {setColor, setTemplate} from "../store";
import {useDispatch, useSelector} from "react-redux";
const renderStuff = [
    {
        id: 111,
        title: "Template 1",
        subtext: "",
        route: "/order-website/templateOne",
        src: tmp1
    },
    {
        id: 112,
        title: "Template 2",
        subtext: "",
        route: "/order-website/templateTwo",
        src: tmp2
    },
    {
        id: 113,
        title: "Template 3",
        subtext: "",
        route: "/order-website/templateThree",
        src: tmp3
    }
]

export default function TemplateViewer() {
    const ref = useRef();
    const [scrollHeight, setScrollHeight] = useState("");
    const [showLoading, setShowLoading] = useState(true)
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { template, color } = useSelector(state => state)

    const setSelectedTemplate = (id) => {
        dispatch(setTemplate(renderStuff.find(item => item.id === id)));
    }

    const handleChange = (newColor) => {
        dispatch(setColor(newColor));
        document.documentElement.style
            .setProperty('--primary-color', newColor);
    }

    const getTemplate = () => {
        return template.route;
    }

    const onLoad = () => {
        setTimeout(() => {
            setScrollHeight(window.innerHeight -71 + 'px')
            setShowLoading(false)
        }, 0)
    }

    const goHome = () => {
        navigate('/get-started')
    }

    const next = () => {
        navigate('/info-form')
    }

    return(
        <div className="template-viewer">
            {
                showLoading &&
                <div className="loading-template">
                    <div>
                        <img src="./logo.svg" alt="ActivNet" width="100"/>
                        <LinearProgress/>
                        <p className="small-text">
                            We're getting things ready for you
                        </p>
                    </div>
                </div>
            }
            <div className="template-selector-side">
                <div className="color-palette-wrapper">
                    <div className="header-color-wrapper">
                        <Web sx={{color:"white"}} />
                        <div className="header-test-block-color">
                            <h4>Ready templates</h4>
                            <p>Select ready template and configure it as you wish</p>
                        </div>
                    </div>
                    {
                        renderStuff.map(item =>
                            <div onClick={
                                () => setSelectedTemplate(item.id)}
                                 key={item.id}
                                 className="template-img-require"
                                 style={{backgroundImage: `url("${item.src}")`}}
                            >
                                {
                                    template.id === item.id &&
                                    <div className="template-text">
                                        <DoneOutline fontSize="large" />
                                        <h4>Selected</h4>
                                    </div>
                                }
                            </div>)
                    }
                </div>
                <div className="color-palette-wrapper">
                    <div className="header-color-wrapper">
                        <ErrorOutline sx={{color: "white"}} />
                        <div className="header-test-block-color">
                            <h4>Color Picker</h4>
                            <p>Select main color for your website</p>
                        </div>
                    </div>
                    <ColorPalette color={color.value} select={handleChange}/>
                </div>
            </div>
            <div className="template-show">
                <div className="template-view-viewer">
                    <iframe
                        ref={ref}
                        id="frame"
                        className="website-preview-frame"
                        src={"https://activnet.tech" + getTemplate() + `/${color.value}`}
                        frameBorder={0}
                        height={scrollHeight}
                        onLoad={onLoad}></iframe>
                </div>
                <div className="template-show-next">
                    <Button sx={{backgroundColor: "#bdf3b7", color: "black"}} onClick={next}>Next <ArrowForward
                        fontSize="small"/></Button>
                    <Button onClick={goHome} sx={{backgroundColor: "#000", color: "white"}}><ArrowBack fontSize="small"/>Back</Button>
                </div>
            </div>
        </div>
    );
}