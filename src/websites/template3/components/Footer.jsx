import * as React from 'react';
import {Facebook, Instagram, LinkedIn, X} from "@mui/icons-material";

export default function Footer() {
    return (
        <div className="template-three-footer flex-center-onerow">
            <div className="template-three-footer-flex-two">
                <div className="template-three-footer-flex-two-col">
                    <a href="#">About us</a>
                    <a href="#">History</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="template-three-footer-flex-two-col">
                    <a href="#">About us</a>
                    <a href="#">History</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="template-three-footer-flex-two-col">
                    <a href="#">About us</a>
                    <a href="#">History</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className="template-three-footer-flex-three">
                <Facebook/>
                <Instagram/>
                <X/>
                <LinkedIn/>
            </div>
        </div>
    );
}