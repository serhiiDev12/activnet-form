import * as React from 'react';
import {ArrowBack, AutoFixHigh, WebStories} from "@mui/icons-material";
import logoHeader from '../components/logo.svg'
import {useNavigate} from "react-router-dom";

export default function GetStarted() {
    let navigate = useNavigate();

    return (
        <div className="get-started">
            <header>
                <nav>
                    <img className="activnet" src={logoHeader} alt="ActivNet" height={20}/>
                    <a href="" onClick={() => navigate('/')}>BACK</a>
                </nav>
            </header>
            <div className="header-get-started">
                <div className="triangles-get-started">
                    <div className="left-temp-sel"></div>
                    <div className="right-temp-sel"></div>
                </div>
                <div className="description-of-services">
                    <h1>Select services</h1>
                    <h3>You can go for custom design as well as select an existing one</h3>
                </div>
            </div>
            <div className="get-started-selection">
                <div className="selection-option" onClick={() => {navigate('/website-viewer')}}>
                    <WebStories fontSize="large"/>
                    <div className="description-area">
                    <h1>Select a ready template</h1>
                        <p>We have a variety of templates that you can use for your business</p>
                    </div>
                    <h3>GET STARTED</h3>
                </div>
                <div className="selection-option" onClick={() => {navigate('/order-design')}}>
                <AutoFixHigh fontSize="large"></AutoFixHigh>
                    <div className="description-area">
                        <h1>Get a Custom design</h1>
                        <p>We will make sure that your ideas will be implemented best way possible with help of our
                            experienced designer</p>
                    </div>
                    <h3>GET STARTED</h3>
                </div>
            </div>
        </div>
    );
}