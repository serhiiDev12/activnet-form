import React from 'react';
import { Divider } from "@mui/material";
import {Call, Email} from "@mui/icons-material";

const Location = () => (
    <div className="location">
        <h3>OUR LOCATION</h3>
        <Divider />
        <div className="location-info">
            <div className="location-section">
                <p>MON-FRI: 8:00 – 16:00</p>
            </div>
            <div className="location-section">
                <p>2345 Anystreet rd, Town, TX</p>
            </div>
            <div className="location-section">
                <Call />
                <p>999 234 2344</p>
            </div>
            <div className="location-section">
                <Email />
                <p>Megan_Hilll@yahoo.com</p>
            </div>
        </div>
        <div className="google-maps">
            <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6966.928371394126!2d-21.801275549253287!3d64.11640477105438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slocation!5e0!3m2!1sen!2sca!4v1714352898531!5m2!1sen!2sca"
                width="600" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
);

export default Location;