import * as React from 'react';
import {ArrowBack, ArrowForward, Close} from "@mui/icons-material";

export default function PortfolioPopup(props) {
    return (
        <div className="portfolio-popup">
            <div className="protfolio-popup-header">
                <Close className="close" onClick={props.closePortfolio} />
            </div>
            <div className="portfolio-popup-text">
                <div className="portfolio-img" style={{backgroundImage: `url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}></div>
                <div className="portfolio-text">
                    <h1>Project header</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="portfolio-switcher">
                        <ArrowBack className="portfolio-arrow" />
                        <ArrowForward className="portfolio-arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
}