import * as React from 'react';
import {
    About,
    CompanyNumbers,
    Footer,
    Header,
    Location,
    Navbar,
    Partners,
    Portfolio,
    Services,
    Testimonials,
    WhyUs
} from './template-components'
import './template-components/main.css'

export default function TemplateOne() {
    return (
        <div className="template-one">
            <div className="fixed-nav">
                <Navbar />
            </div>
            <Header />
            <About />
            <Services />
            <Portfolio />
            <WhyUs />
            <CompanyNumbers />
            <Partners />
            <Testimonials />
            <Location />
            <Footer />
        </div>
    );
}