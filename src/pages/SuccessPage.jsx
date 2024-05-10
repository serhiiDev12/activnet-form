import * as React from 'react';
import {Done} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

export default function SuccessPage() {
    let navigate = useNavigate();
    return (
        <div className="success-page">
            <div className="success-title">
                <Done fontSize="large" className="success-tick" />
                <h1>Success!</h1>
                <p>Your request has been processed successfully.</p>
                <p>You'll be contacted by our professional when everything is ready</p>
                <button className="go-back" onClick={() => navigate('/')}>Go Back</button>
            </div>
        </div>
    );
}