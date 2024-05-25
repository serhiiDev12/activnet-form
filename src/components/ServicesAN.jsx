import * as React from 'react';
import { Box} from "@mui/material";
import {useState} from "react";
import {ArrowForward} from "@mui/icons-material";
import services from './services.svg'

const servicesDetails = [
    {
        id: "web 1",
        title: "WEBSITE DEVELOPMENT",
        description: "We believe that our customers should not spend any time trying to configure their\n" +
            "                                website,\n" +
            "                                let alone paying for it.",
        descriptionTwo: "That's why development is always FREE. You pay only when you have a product working",
        img: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: "maintain 2",
        title:"SOFTWARE MAINTENANCE",
        description: "Maintenance is a complicated process, good that you don't need to worry about it.",
        descriptionTwo: "It also includes any changes you need to make for your website",
        img: 'https://images.unsplash.com/photo-1601119479271-21ca92049c81?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: "marketing 2",
        title: "GOOGLE MARKETING",
        description: "All our websites are SEO optimized and verified before delivery.",
        descriptionTwo: "In addition to that you can order an advertisement campaign, any budget",
        img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: "DESIGN 3",
        title: "UX/UI DESIGN",
        description: "We create visually appealing and user-friendly designs to enhance the overall user experience.",
        descriptionTwo: "You can select ready template or apply for your own design of logo or an entire website",
        img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

export default function ServicesAN(props) {
    const [selectedId, setSelectedId] = useState("web 1")

    const setSelectedService = (id) => {
        setSelectedId(id)
    }

    const getSelectedObject = () => {
        return servicesDetails.find(item => item.id === selectedId)
    }

    return (
        <div className="services-an">
            <div className="services-an-background">
                <div className="services-sidebyside">
                    <div className="services-logo">
                        <img src={services} alt="" width={600}/>
                    </div>
                    <div className="service-margins">
                        <h1>Services we provide will satisfy every business</h1>
                        <p>We provide wide range of services related to your digital representation and business website
                            delivery</p>
                        <div className="services-an-flex">
                            {
                                servicesDetails.map(item =>
                                    <Box key={item.id} className="service-an-item"
                                         onClick={() => setSelectedService(item.id)}>
                                        <h4>{item.title}</h4>
                                    </Box>
                                )
                            }
                        </div>
                    </div>
                </div>

                <button onClick={props.start}>Become a client</button>
            </div>
        </div>
    );
}