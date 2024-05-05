import * as React from 'react';
import {Facebook, Instagram, LinkedIn, X} from "@mui/icons-material";

export default function Footer() {
    return (
        <div className="templatetwo-footer flex-center-onerow">
            <div className="templatetwo-footer-flex-one">
                <h2>Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Ornare at cursus odio sit nibh fringilla odio. Erat elit risus vehicula cursus. Tincidunt.</p>
            </div>
            <div className="templatetwo-footer-flex-two">
                <div className="templatetwo-footer-flex-two-col">
                    <a href="#">About us</a>
                    <a href="#">History</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="templatetwo-footer-flex-two-col">
                    <a href="#">About us</a>
                    <a href="#">History</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="templatetwo-footer-flex-two-col">
                    <a href="#">About us</a>
                    <a href="#">History</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className="templatetwo-footer-flex-three">
                <Facebook />
                <Instagram />
                <X />
                <LinkedIn />
            </div>
        </div>
    );
}