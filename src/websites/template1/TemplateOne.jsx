import * as React from 'react';
import {
    About,
    CompanyNumbers,
    Footer,
    Header,
    Location,
    Navbar,
    Partners,
    Portfolio,
    Services,
    Testimonials,
    WhyUs
} from './template-components'
import './template-components/main.css'
import ColorPicker from "../../components/ColorPicker";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function TemplateOne() {
    return (
        <div className="template-one">
            <div className="fixed-nav">
                <Navbar/>
            </div>
            <Header/>
            <About/>
            <Services/>
            <Portfolio/>
            <WhyUs/>
            <CompanyNumbers/>
            <Partners/>
            <Testimonials/>
            <Location/>
            <Footer/>
            <div className="color-picker">
                <ColorPicker/>
            </div>
        </div>
    );
}