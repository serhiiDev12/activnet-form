import * as React from 'react'
import {LinearProgress} from "@mui/material";
import './loading.css'

export default function Loading() {
    return (
        <div className="loading">
            <div className="contered-loading">
                <img src="./logo.svg" alt="ActivNet" width="100"/>
                <LinearProgress />
                <p className="small-text">
                    We're getting things ready for you
                </p>
            </div>
        </div>
    )
}