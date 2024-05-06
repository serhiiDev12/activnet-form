import * as React from 'react';
import {Rating} from "@mui/material";

const testimonials = [
    {
        author: "JANE DOE",
        text: "Et eligendi expedita. Accusantium qui est eius nemo eaque dolore necessitatibus voluptatem",
        rate: 5
    },
    {
        author: "JANE DOE",
        text: "Et eligendi expedita. Accusantium qui est eius nemo eaque dolore necessitatibus voluptatem",
        rate: 4.5
    },
    {
        author: "JANE DOE",
        text: "Et eligendi expedita. Accusantium qui est eius nemo eaque dolore necessitatibus voluptatem",
        rate: 5
    },
    {
        author: "JANE DOE",
        text: "Et eligendi expedita. Accusantium qui est eius nemo eaque dolore necessitatibus voluptatem",
        rate: 5
    },
]

export default function Testimonials() {
    return (
        <div className="template-three-testimonials">
            <h4>What Our Clients Say</h4>
            <div className="template-three-testimonials-list">
                {
                    testimonials.map((testimonial, index) => (
                        <div key={index} className="template-three-testimonial">
                            <h3>{testimonial.author}</h3>
                            <p>{testimonial.text}</p>
                            <Rating name="read-only" value={testimonial.rate} readOnly className="rating"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}