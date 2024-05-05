import * as React from 'react';
import {Avatar, Rating} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

function Testimonial({header, text, name}) {
    return (
        <div className="templatetwo-testimonial">
            <div className="templatetwo-testimonial-avatar">
                <Avatar sx={{width: "100px", height: "100px"}} src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="templatetwo-testemonials-item-content">
                <Rating name="read-only" value={5} readOnly className="rating"/>
                <h2>{header}</h2>
                <p>“{text}”</p>
                <p className="username">{name}</p>
            </div>
        </div>
    );
}
const renderStuff = [
    {
        header: "Header1", text: "Some text that describes how well you do represents a review from client", name: "Joseph Doe"
    },
    {
        header: "Header2", text: "Other text that represents a review from client represents a review from client", name: "Marry Doe"
    },
    {
        header: "Header3", text: "Some text that describes how well you do represents a review from client", name: "Joseph Doe"
    }
];
export default function Testimonials() {
    return (
        <div className="templatetwo-testimonials indents">
            <h6>Testimonials</h6>
            <div className="templatetwo-testimonials-carousel">
                <Carousel
                    NextIcon={<ArrowForward />}
                    PrevIcon={<ArrowBack />}
                    animation="slide"
                    interval={6000}
                >
                    {
                        renderStuff.map(item => <Testimonial key={item} {...item} />)
                    }
                </Carousel>
            </div>
        </div>
    )
}