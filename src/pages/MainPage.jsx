import * as React from 'react'
import './mainStyles.css'
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "./Loading";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {AccessTime, Edit, InsertDriveFile, Send, TagFaces, Web} from "@mui/icons-material";
import template1 from "../components/Template1.png";
import template2 from "../components/Template2.png";
import template3 from "../components/Template3.png";
import Header from "../components/HeaderAN";
import ServicesAN from "../components/ServicesAN";

export default function MainPage() {
    const [showLoading, setShowLoading] = useState(true)
    let navigate = useNavigate();

    const templates = [
        {id: 1, src: template1, route: '/order-website/templateOne'},
        {id: 2, src: template2, route: '/order-website/templateTwo'},
        {id: 3, src: template3, route: '/order-website/templateThree'}
    ]

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

    return (
        <div className="wrapper">
            {
                showLoading &&
                <Loading />
            }
            <header>
                <nav>
                    <img className="activnet" src="./logo.svg" alt="ActivNet" />
                        <a>About</a>
                        <a>Features</a>
                        <a>Pricing</a>
                </nav>
            </header>
            <div>
                <Header start={startWebsiteCreate} />
                <ServicesAN start={startWebsiteCreate} />
            </div>
        </div>
    )
}