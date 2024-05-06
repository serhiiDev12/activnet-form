import * as React from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
import QuestionsForm from "./components/QuestionsForm";
import Footer from "./components/Footer";
import ColorPicker from "../../components/ColorPicker";
import './template3.css'
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";

export default function TemplateThree() {
    return (
        <>
            <NavBar/>
            <Header/>
            <ContactForm/>
            <Services/>
            <WhyUs />
            <Testimonials />
            <QuestionsForm/>
            <Footer/>
            <div className="color-picker">
                <ColorPicker/>
            </div>
        </>
    );
}