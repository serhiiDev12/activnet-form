import * as React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

export default function Benefits() {
    return (
        <div className="benefits">
            <ScrollAnimation animateIn='fadeInLeft' duration={0.5}>
            <div className="benefits-header">
                <p></p>
                <h1>Benefits & <br/><span>Why We Stand Out</span></h1>
                <p>We provide wide range of services related to your digital representation and business website delivery</p>
            </div>
            </ScrollAnimation>
            <div className="benefits-list">
                <ScrollAnimation animateIn='fadeInLeft' duration={1} delay={300}>
                <div className="benefit">
                    <h2>Completely Free Development</h2>
                    <p>Many website builders charge monthly or yearly fees. 
                        We provide a completely free, custom-designed website to get you started. 
                        Focus on your business, not ongoing subscription costs.</p>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInLeft' duration={1} delay={600}>
                <div className="benefit">
                    <h2>Expert support 24/7</h2>
                    <p> Website builders often offer limited support, leaving you to troubleshoot problems on your own.  
                        At ActivNet, you get a dedicated team of web development experts who collaborate with you throughout 
                        the process and ensure your website functions flawlessly.</p>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInLeft' duration={1} delay={900}>
                <div className="benefit">
                    <h2>SEO Friendly</h2>
                    <p>Our websites are built with SEO best practices in mind, helping you rank higher in search engine results.</p>
                </div>
                </ScrollAnimation>
            </div>
        </div>)
}