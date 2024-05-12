import * as React from 'react';
import tmp1 from "../components/Template1.png";
import tmp2 from "../components/Template2.png";
import tmp3 from "../components/Template3.png";
import {useRef, useState} from "react";
import TemplateOne from "../websites/template1/TemplateOne";
import TemplateTwo from "../websites/template2/TemplateTwo";
import TemplateThree from "../websites/template3/TemplateThree";
import './template-viewer.css'
import {Button, LinearProgress} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import Loading from "./Loading";
import ColorPalette from "../components/ColorPalette";
const renderStuff = [
    {
        id: 111,
        title: "",
        subtext: "",
        route: "/order-website/templateOne",
        src: tmp1
    },
    {
        id: 112,
        title: "",
        subtext: "",
        route: "/order-website/templateTwo",
        src: tmp2
    },
    {
        id: 113,
        title: "",
        subtext: "",
        route: "/order-website/templateThree",
        src: tmp3
    }
]

export default function TemplateViewer() {
    const [selectedTemplate, setSelectedTemplate] = useState(111);
    const ref = useRef();
    const [scrollHeight, setScrollHeight] = useState("");
    const [color, setColor] = useState('00796B');
    const [showLoading, setShowLoading] = useState(true)
    let navigate = useNavigate();

    const handleChange = (newColor) => {
        setShowLoading(true)
        console.log(newColor)
        setColor(newColor);
        document.documentElement.style
            .setProperty('--primary-color', newColor);
    }
    const getTemplate = () => {
        return renderStuff.find(item => item.id === selectedTemplate).route
    }
    const onLoad = () => {
        setTimeout(() => {
            setScrollHeight(window.innerHeight -71 + 'px')
            setShowLoading(false)
        }, 0)
    }

    const goHome = () => {
        navigate('/')
    }

    return(
        <div className="template-viewer">
            <div className="template-selector-side">
                <h2>Select template</h2>
                <div className="templates-list">
                    {
                        renderStuff.map(item =>
                            <div onClick={
                                () => setSelectedTemplate(item.id)}
                                 key={item.id}
                                 className="template-img-require"
                                 style={{backgroundImage: `url("${item.src}")`}}
                            >
                                {
                                    selectedTemplate === item.id &&
                                    <div className="template-text">
                                        <h4>Selected</h4>
                                    </div>
                                }
                            </div>)
                    }
                </div>
                <div className="color-palette-wrapper">
                    <ColorPalette color={color} select={handleChange} />
                </div>
            </div>
            <div className="template-show">
                <div className="template-view-viewer">
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
                    <iframe
                        ref={ref}
                        id="frame"
                        className="website-preview-frame"
                        src={"https://www.activnet.tech/" + getTemplate() + `/${color}`}
                        frameBorder={0}
                        height={scrollHeight}
                        onLoad={onLoad}></iframe>
                </div>
                <div className="template-show-next">
                    <Button sx={{backgroundColor: "#bdf3b7", color: "black"}}>Next <ArrowForward
                        fontSize="small"/></Button>
                    <Button onClick={goHome} sx={{backgroundColor: "#000", color: "white"}}><ArrowBack fontSize="small"/>Back</Button>
                </div>
            </div>
        </div>
    );
}