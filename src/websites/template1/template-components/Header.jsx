import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="image-withHeader">
                <div className={"overlap"}>
                    <h1>COMPANY MOTO</h1>
                    <p>COMPANY SUBTEXT</p>
                    <button className="header-button">CALL-TO-ACTION</button>
                </div>
            </div>
        </div>
    )
};

export default Header;