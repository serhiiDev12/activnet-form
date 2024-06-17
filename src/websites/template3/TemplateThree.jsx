import * as React from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
import QuestionsForm from "./components/QuestionsForm";
import Footer from "./components/Footer";
import ColorPicker from "../../components/ColorPalette";
import './template3.css'
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function TemplateThree(props) {
    const { color } = useParams();
    useEffect(() => {
        document.documentElement.style
            .setProperty('--primary-color', '#' + color);
    }, [color])

    return (
        <div className="template-three">
            <NavBar/>
            <Header/>
            <ContactForm/>
            <Services/>
            <WhyUs />
            <Testimonials />
            <QuestionsForm/>
            <Footer/>
        </div>
    );
}