import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";
import {ArrowBackIos} from "@mui/icons-material";

const Navbar = () => {
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
        <div className="navbar">
            <div className="left">
                {
                    showBack &&
                    <Button onClick={() => navigate('/order-website')}><ArrowBackIos /> Back</Button>
                }
                <h4>LOGO</h4>
            </div>
            <div className="right">
                <a href="#">About Us</a>
                <a href="#">What we do</a>
                <a href="#">Portfolio</a>
                <a href="#">Contacts</a>
            </div>
        </div>
    )
}

export default Navbar;