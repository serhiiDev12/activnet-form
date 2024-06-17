import * as React from 'react';
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import tmp1 from './Template1.png'
import tmp2 from './Template2.png'
import tmp3 from './Template3.png'
import ScrollAnimation from "react-animate-on-scroll";
import {useNavigate} from "react-router-dom";

const renderStuff = [
    {
        id: 111,
        title: "template1",
        color: "00796B",
        route: "/order-website/templateOne",
        src: tmp1
    },
    {
        id: 112,
        title: "template2",
        color: "BF360C",
        route: "/order-website/templateTwo",
        src: tmp2
    },
    {
        id: 113,
        title: "template3",
        color: "1565C0",
        route: "/order-website/templateThree",
        src: tmp3
    }
]

export default function ChooseTemplate(props) {
    const navigate  = useNavigate()

    const redirect = (route, color) => {
        navigate(route + '/' + color);
    }

    return (
        <div id="templates" className="choose-template-an">
            <h1>See ready-to-go templates <br/>
                to create your own website!</h1>
            <p>We offer a wide range of professionally designed landing page templates to suit every business need. <br/>
                Browse through our collection and find the perfect template to showcase your story. </p>
            <div className="template-selector-an">
                {
                    renderStuff.map(item =>
                        <div onClick={() => redirect(item.route, item.color)} key={item.id} className="template-img" style={{backgroundImage: `url("${item.src}")`}}>

                        </div>)
                }
            </div>
        </div>
    )
}