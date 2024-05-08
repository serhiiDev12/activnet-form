import * as React from 'react';
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";

const renderStuff = [
    {
        id: 11,
        title: "Grow your business with ActivNet",
        subtext: "We help all types of businesses to represent themselves in a web and getting quality and cheap website",
        src: "https://images.unsplash.com/photo-1509339022327-1e1e25360a41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        title: "We cover your back",
        subtext: "ActivNet team don't believe in pushing their clients to build a website themselves and spend lot's of time making it run. All that so you can focus on your business while we cover your back",
        src: "https://images.unsplash.com/photo-1594402919317-9e67dca0a305?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        title: "Delivering Assurance",
        subtext: "We constantly monitor your website status and making sure your website is always accessible",
        src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

export default function Header(props) {
    return (
        <div id="about" className="main-page-header">
            <Carousel
                className="main-page-header"
                NextIcon={<ArrowForward />}
                PrevIcon={<ArrowBack />}
                animation="slide"
                navButtonsAlwaysVisible={true}
                interval={12000}
            >
                {
                    renderStuff.map(item => <div key={item.id} className="header-img-format main-page-header" style={{backgroundImage: `url("${item.src}")`}}>
                        <div className="header-text">
                            <h1>{item.title}</h1>
                            <h4>{item.subtext}</h4>
                            <button onClick={props.start}>GET STARTED <ArrowForward fontSize="large" /></button>
                        </div>
                    </div>)
                }
            </Carousel>
        </div>
    );
}