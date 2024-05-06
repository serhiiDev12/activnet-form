import * as React from 'react';
import {Avatar, Rating} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

function Testimonial({header, text, name}) {
    return (
        <div className="templatetwo-testimonial">

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
        <div className="templatetwo-testimonials">
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