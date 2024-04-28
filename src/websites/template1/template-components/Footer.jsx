import React from 'react';
import {Facebook, Instagram, LinkedIn, X} from "@mui/icons-material";

const Footer = () => (
    <div className="footer-template">
        <div className="links">
            <a href="">
                License
            </a>
            <a href="">
                FAQ
            </a>
            <a href="">
                More
            </a>
            <a href="">
                Cannot locate us?
            </a>
            <a href="">
                Any Link
            </a>
        </div>
        <div className="logo-footer">
            LOGO
        </div>
        <div className="social">
            <Facebook />
            <Instagram />
            <X />
            <LinkedIn />
        </div>
        <div className="copyright-temp">
            Copyright @ 2024 ActivNet Tech, All Rights Reserved
        </div>
    </div>
);

export default Footer;