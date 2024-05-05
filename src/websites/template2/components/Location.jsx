import * as React from 'react';

export default function Location() {
    return (
        <div className="templatetwo-location indents">
            <div className="templatetwo-location-info">
                <h6>LOCATION & HOURS</h6>
                <p>Mon-Fri 8:00 – 16:00</p>
                <p>2507 Breitenberg Extension, New Ford 14102-6913</p>
                <p>998.617.9068</p>
                <p>Megan_Hilll@yahoo.com</p>
            </div>
            <div className="templatetwo-location-map">
                <iframe
                    className="templatetwo-location-map-map"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6966.928371394126!2d-21.801275549253287!3d64.11640477105438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slocation!5e0!3m2!1sen!2sca!4v1714352898531!5m2!1sen!2sca"
                    allowFullScreen="" loading="lazy" height="400" width={700}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}