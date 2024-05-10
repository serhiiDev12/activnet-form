import * as React from 'react'
import './mainStyles.css'
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

export default function MainPage() {
    const [showLoading, setShowLoading] = useState(true);
    const [small, setSmall] = useState(false);
    let navigate = useNavigate();

    const templates = [
        {id: 1, src: template1, route: '/order-website/templateOne'},
        {id: 2, src: template2, route: '/order-website/templateTwo'},
        {id: 3, src: template3, route: '/order-website/templateThree'}
    ]

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 200)
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
        navigate('/order-website');
    }

    const startDesignerInquiry = () => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false);
        }, 400)
        navigate('/order-design');
    }

    return (
        <div className="wrapper">
            {
                showLoading &&
                <Loading />
            }
            <header>
                <nav style={{
                    backgroundColor: !small ? "transparent": "black",
                    transition: "all 0.3s"
                }}>
                    <img className="activnet" src="./logo.svg" alt="ActivNet" />
                        <a href="#about">About</a>
                        <a href="#templates">Templates</a>
                        <a href="#prices">Pricing</a>
                </nav>
            </header>
                <Header start={startWebsiteCreate} />
                <div className="map-section">
                    <ServicesAN start={startWebsiteCreate} />
                    <ChooseTemplate start={startWebsiteCreate} />
                    <Pricing start={startWebsiteCreate} designer={startDesignerInquiry}/>
                    <Faq />
                    <Footer />
                </div>
        </div>
    )
}