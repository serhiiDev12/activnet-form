import * as React from 'react';
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import tmp1 from './Template1.png'
import tmp2 from './Template2.png'
import tmp3 from './Template3.png'
import ScrollAnimation from "react-animate-on-scroll";

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
        <div id="templates" className="choose-template-an">
            <h1>See ready-to-go templates <br/>
                to create your own website!</h1>
            <p>We offer a wide range of professionally designed landing page templates to suit every business need. <br/>
                Browse through our collection and find the perfect template to showcase your story. </p>
            <div className="template-selector-an">
                {
                    renderStuff.map(item =>
                        <div key={item.id} className="template-img" style={{backgroundImage: `url("${item.src}")`}}>

                        </div>)
                }
            </div>
            <div className="become-client-form">
                <button onClick={props.start}>Get Started</button>
            </div>
        </div>
    )
}