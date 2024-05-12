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
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function TemplateOne(props) {
    const { color } = useParams();
    useEffect(() => {
        document.documentElement.style
            .setProperty('--primary-color', '#' + color);
    }, [color])

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
        </div>
    );
}