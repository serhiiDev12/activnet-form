import * as React from 'react';
import { Box} from "@mui/material";

export default function ServicesAN(props) {
    return (
        <div className="services-an">
            <div className="services-an-background">
                <h1>Services we provide will satisfy every business</h1>
                <p>We provide wide range of services related to your digital representation and business website
                    delivery</p>
                <div className="services-an-flex">
                    <Box className="service-an-item">
                        <h4>WEB DEVELOPMENT</h4>
                        <p>We believe that our customers should not spend any time trying to configure their website,
                            let alone paying for it.</p>
                        <p>That's why development is always FREE. You pay only when you have a product working</p>
                    </Box>
                    <Box className="service-an-item">
                        <h4>MAINTENANCE</h4>
                        <p>Maintenance is a complicated process, good that you don't need to worry about it.</p>
                        <p>I also includes any kinds of changes you need to make fpr your website</p>
                    </Box>
                    <Box className="service-an-item">
                        <h4>MARKETING</h4>
                        <p>All our websites are SEO optimized and verified before delivery.</p>
                        <p>In addition to that you can order an advertisement campaign, any budget</p>
                    </Box>
                    <Box className="service-an-item">
                        <h4>DESIGN</h4>
                        <p>We create visually appealing and user-friendly designs to enhance the overall user
                            experience.</p>
                        <p>You can select ready template or apply for your own design of logo or an entire website</p>
                    </Box>
                </div>
                <button onClick={props.start}>Become a client</button>
            </div>
        </div>
    );
}