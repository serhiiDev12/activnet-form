import * as React from "react";
import {ArrowForward} from "@mui/icons-material";

export default function Portfolio(props) {
    return (
        <div className="templatetwo-portfolio indents">
            <h6 className="templatetwo-section-title">PORTFOLIO</h6>
            <h4 className="templatetwo-section-subtext-portfolio">Lorem ipsum dolor sit amet consectetur.</h4>
            <div className="templatetwo-porfolio-grid flex-fourbyfour">
                <div className="templatetwo-porfolio-grid-item">
                    <div style={{
                        backgroundSize: "cover",
                        width: "45vw",
                        height: "20vw",
                        backgroundPosition: "center",
                        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664392214882-7cecd0a67ccd?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
                    }}></div>
                    <h6 className="templatetwo-section-title">Header</h6>
                    <p className="templatetwo-portfolio-image-sub">Description</p>
                </div>
                <div className="templatetwo-porfolio-grid-item">
                    <div style={{
                        backgroundSize: "cover",
                        width: "45vw",
                        height: "20vw",
                        backgroundPosition: "center",
                        backgroundImage: `url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
                    }}></div>
                    <h6 className="templatetwo-section-title">Header</h6>
                    <p className="templatetwo-portfolio-image-sub">Description</p>
                </div>
                <div className="templatetwo-porfolio-grid-item">
                    <div style={{
                        backgroundSize: "cover",
                        width: "45vw",
                        height: "20vw",
                        backgroundPosition: "center",
                        backgroundImage: `url("https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
                    }}></div>
                    <h6 className="templatetwo-section-title">Header</h6>
                    <p className="templatetwo-portfolio-image-sub">Description</p>
                </div>
                <div className="templatetwo-porfolio-grid-item">
                    <div style={{
                        backgroundSize: "cover",
                        width: "45vw",
                        height: "20vw",
                        backgroundPosition: "center",
                        backgroundImage: `url("https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
                    }}></div>
                    <h6 className="templatetwo-section-title">Header</h6>
                    <p className="templatetwo-portfolio-image-sub">Description</p>
                </div>
            </div>
            <button className="templatetwo-button-icon" onClick={props.openPortfolio}>See all works <ArrowForward/></button>
        </div>
    )
}