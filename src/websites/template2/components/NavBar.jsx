import * as React from 'react';
import {AppBar, Toolbar} from "@mui/material";

export default function NavBar(props) {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <div className="templatetwo-nav">
                    <div className="templatetwo-navlogo">
                        <h3 className="two-h3">DEMO</h3>
                    </div>
                    <div className="templatetwo-navlinks">
                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Reviews</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="templatetwo-navbutton">
                        <button className="templatetwo-navbutton-c" onClick={() => props.setOpenClose(true)}>Make Inquiry</button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}