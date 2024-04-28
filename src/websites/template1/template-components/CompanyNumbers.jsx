import React from 'react';

const CompanyNumbers = () => {
    return (
        <div className="company-numbers">
            <h3>OUR COMPANY NUMBERS</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Vestibulum dictumst sed tortor suspendisse elit in. Fringilla urna velit malesuada habitant ut. Facilisi euismod ultrices tempor faucibus faucibus convallis cras. </p>
            <div className="company-numbers-grid">
                <div className="company-number">
                    <h1>32+</h1>
                    <p>Offices worldwide</p>
                </div>
                <div className="dot"></div>
                <div className="company-number">
                    <h1>500+</h1>
                    <p>Team members</p>
                </div>
                <div className="dot"></div>
                <div className="company-number">
                    <h1>10M</h1>
                    <p>Clients</p>
                </div>
                <div className="dot"></div>
                <div className="company-number">
                    <h1>100K+</h1>
                    <p>Servers worldwide</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyNumbers;