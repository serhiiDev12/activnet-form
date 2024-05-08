import * as React from 'react';
import {LinkedIn} from "@mui/icons-material";

export default function Footer() {
    return (
        <div className="footer-an">
            <div className="footer-an-content">
                <div className="footer-am-content-links">
                    <h2>Main specialization</h2>
                    <p>Website maintenance</p>
                    <p>Web development</p>
                    <p>Hosting</p>
                    <p>UX/UI Design</p>
                    <p>Logotype design</p>
                    <p>Marketing</p>
                    <p>SEO Attributes</p>
                </div>
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
                    <a href="">About</a>
                    <a href="">Where we located</a>
                    <a href="">FAQ</a>
                    <a href="">Services</a>
                    <a href="">Prices</a>
                    <a href="">Templates</a>
                </div>
                <div className="footer-am-content-links">
                </div>
                <div className="footer-am-content-links">
                    <h2>Follow Us</h2>
                    <LinkedIn fontSize="large" className="in" sx={{color: "white"}}></LinkedIn>
                </div>
            </div>
        </div>
    )
}