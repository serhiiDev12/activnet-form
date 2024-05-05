import React, {useState} from 'react'


import './template2.css'
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Services from "./components/Services";
import History from "./components/History";
import Portfolio from "./components/Portfolio";
import CompanyNumbers from "./components/CompanyNumbers";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import ColorPicker from "../../components/ColorPicker";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import PortfolioPopup from "./components/PortfolioPopup";
import ContactForm from "./components/ContactForm";

const Template2 = () => {
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);

    const openPortfolio = () => {
        console.log('fdsdfsd')
        setShowPortfolio(true)
    }

    return (
        <>
            {
                showPortfolio &&
                <PortfolioPopup
                    closePortfolio={() =>
                        setShowPortfolio(false)}
                />
            }
            <ContactForm open={showContactForm} setOpenClose={(value) => setShowContactForm(value)} />
            <NavBar setOpenClose={(value) => setShowContactForm(value)} />
            <Header setOpenClose={(value) => setShowContactForm(value)} />
            <Services/>
            <History/>
            <WhyUs />
            <Portfolio openPortfolio={openPortfolio}/>
            <CompanyNumbers/>
            <Testimonials/>
            <Location/>
            <Footer />
            <div className="color-picker">
                <ColorPicker/>
            </div>
        </>
    )
}

export default Template2