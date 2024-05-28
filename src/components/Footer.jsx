import * as React from 'react';
import {LinkedIn} from "@mui/icons-material";

export default function Footer() {
    return (
        <div className="footer-an">
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
                    <LinkedIn
                        onClick={() => window.open('https://www.linkedin.com/company/activnetech/about/', '_blank')}
                        fontSize="large"
                        className="in"
                        sx={{color: "black"}}
                    />
                </div>
            </div>
        </div>
    )
}