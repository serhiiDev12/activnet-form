import * as React from 'react'
import './mainStyles.css'
import './styles.css'
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "./Loading";
import template1 from "../components/Template1.png";
import template2 from "../components/Template2.png";
import template3 from "../components/Template3.png";
import Header from "../components/HeaderAN";
import ServicesAN from "../components/ServicesAN";
import ChooseTemplate from "../components/ChooseTemplate";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import logoHeader from './header.svg'
import {CircularProgress, Dialog, DialogContent, TextField} from "@mui/material";
import {Close, Done} from "@mui/icons-material";
import {sendContactForm} from "../service";

export default function MainPage() {
    const [showLoading, setShowLoading] = useState(true);
    const [small, setSmall] = useState(false);
    const [openContactForm, setOpenForm] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [contactFormLoading, setContactFormLoading] = useState(false);
    let navigate = useNavigate();

    const templates = [
        {id: 1, src: template1, route: '/order-website/templateOne'},
        {id: 2, src: template2, route: '/order-website/templateTwo'},
        {id: 3, src: template3, route: '/order-website/templateThree'}
    ]

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 10)
            );
        }
    }, []);

    useEffect(() => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false);
        }, 600)
    }, [navigate])
    
    const startWebsiteCreate = () => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false);
        }, 400)
        navigate('/website-viewer');
    }

    const startDesignerInquiry = () => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false);
        }, 400)
        navigate('/order-design');
    }

    const openPopover = (email) => {
        setOpenForm(true);
        setEmail(email)
    }

    const sendForm = async () => {
        setContactFormLoading(true);
        await sendContactForm({email: email, body: message});
        setContactFormLoading(false);
        setSuccess(true);
    }

    return (
        <div className="wrapper">
            {
                showLoading &&
                <Loading />
            }
            <header>
                <nav style={{width: small ? "100%" : "", background: small ? "#282c34": "none"}}>
                    <img className="activnet" src={logoHeader} alt="ActivNet" height={20}/>
                    <a href="#about">About</a>
                    <a href="#templates">Templates</a>
                    <a href="#prices">Pricing</a>

                    {small && <button className="contact-us-button" onClick={() => setOpenForm(true)}>Contact Us</button>}
                </nav>
            </header>
            <Dialog sx={{borderRadius: "12px"}} open={openContactForm} onClose={() => {
                setOpenForm(false); setSuccess(false); setEmail(""); setMessage("")}}>
                <Close className="close" onClick={() => setOpenForm(false)} />
                <DialogContent sx={{display:"flex", flexDirection:"column", gap: "20px"}}>
                    {!success && <div style={{display:"flex", flexDirection:"column", gap: "20px"}}>
                        <h1 className="contact-header">Contact</h1>
                        <p>Let's discuss your questions</p>
                        <TextField sx={{width: "300px"}} label="Email" value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        <TextField multiline rows={4} label="Message" value={message}
                                   onChange={(e) => setMessage(e.target.value)}/>
                        <button className="contact-form-button" onClick={sendForm}>SEND</button>
                    </div>}
                    {
                        contactFormLoading && !success &&
                        <div className="loading-contact-form">
                            <CircularProgress />
                        </div>
                    }
                    {
                        !contactFormLoading && success &&
                        <div className="succes-form">
                            <Done fontSize="large" />
                            <h2>Success</h2>
                            <p>We'll contact you as soon as possible</p>
                        </div>
                    }
                </DialogContent>

            </Dialog>
            <Header start={startWebsiteCreate} openPopover={openPopover}/>
            <div className="map-section">
                <ServicesAN start={startWebsiteCreate}/>
                <ChooseTemplate start={startWebsiteCreate}/>
                <Pricing start={startWebsiteCreate} designer={startDesignerInquiry}/>
                <Faq/>
                <Footer />
                </div>
        </div>
    )
}