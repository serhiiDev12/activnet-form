import * as React from 'react';
import {LinkedIn} from "@mui/icons-material";
import logo from './logo.svg'
import logoBig from './ActivNet.svg'

export default function Footer() {
    return (
        <div className="footer-an">
            <div className="footer-am-content-links">
                <div className="logo-company">
                    <img src={logo} alt="" height={30}/>
                    <img src={logoBig} alt=""/>
                </div>
                <h2>Follow Us</h2>
                <LinkedIn
                    onClick={() => window.open('https://www.linkedin.com/company/activnetech/about/', '_blank')}
                    fontSize="large"
                    className="in"
                    sx={{color: "white"}}
                />
                <a href="mailto:inquiry@activnet.tech">inquiry@activnet.tech</a>
            </div>
            <div className="footer-an-content">
                <div className="footer-am-content-links">
                    <h2>Technologies</h2>
                    <p>Amazon Web Services</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>Figma</p>
                    <p>TypeScript</p>
                    <p>SCSS</p>
                    <p>.NET / Node.js</p>
                </div>
                <div className="footer-am-content-links">
                    <a href="#about">About</a>
                    <a href="#faq">FAQ</a>
                    <a href="#services">Services</a>
                    <a href="#prices">Prices</a>
                    <a href="#templates">Templates</a>
                </div>
            </div>
        </div>
    )
}