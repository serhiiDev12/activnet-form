import * as React from 'react';
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import tmp1 from './Template1.png'
import tmp2 from './Template2.png'
import tmp3 from './Template3.png'

const renderStuff = [
    {
        id: 111,
        title: "",
        subtext: "",
        route: "",
        src: tmp1
    },
    {
        id: 112,
        title: "",
        subtext: "",
        route: "",
        src: tmp2
    },
    {
        id: 113,
        title: "",
        subtext: "",
        route: "",
        src: tmp3
    }
]

export default function ChooseTemplate(props) {
    return (
        <div className="choose-template-an">
            <div className="triangles">
                <div className="left-temp-sel"></div>
                <div className="right-temp-sel"></div>
            </div>
            <h1>Choose ready template</h1>
            <p>We can deliver a ready template with features you need quickly!</p>
            <div className="template-selector-an">
                {
                    renderStuff.map(item =>
                        <div key={item.id} className="template-img" style={{backgroundImage: `url("${item.src}")`}}>
                            <div className="template-text">
                                <h1>{item.title}</h1>
                                <h4>{item.subtext}</h4>
                            </div>
                        </div>)
                }
            </div>
            <button onClick={props.start}>Get Started <ArrowForward fontSize="large" /></button>
        </div>
    )
}