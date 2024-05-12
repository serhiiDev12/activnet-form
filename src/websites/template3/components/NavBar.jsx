import * as React from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import {ArrowBackIos} from "@mui/icons-material";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function NavBar(props) {
    return (
        <AppBar  position="fixed">
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
                </div>
            </Toolbar>
        </AppBar>
    );
}