import * as React from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import {ArrowBackIos} from "@mui/icons-material";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function NavBar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [showBack, setShowBack] = useState(false);
    const { inFrame } = useParams();

    useEffect(() => {
        if (inFrame === 'false') {
            setShowBack(true);
        } else {
            setShowBack(false);
        }

    }, [location.pathname])

    return (
        <AppBar  position="fixed">
            <Toolbar>
                <div className="templatetwo-nav">
                    <div className="templatetwo-navlogo">
                        {
                            showBack &&
                            <Button onClick={() => navigate('/order-website')}><ArrowBackIos /> Back</Button>
                        }
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