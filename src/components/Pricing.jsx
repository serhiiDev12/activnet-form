import * as React from 'react'
import {Close, Star} from "@mui/icons-material";

const prices = [
    {
        id: 1111,
        title: 'Development',
        price: '$0.00',
        description: ["Completely FREE website development, you won't be paying for development or when your website is not up and running"]
    },
    {
        id: 1112,
        title: 'Basic Plan',
        price: '$16.98/m',
        crossedPrice: "$25.47",
        brief: "This plan is best for individuals that need either a landing page as a representation of their company",
        description: ["Website maintenance", "Support", "Make changes to website anytime", "No SMS or Email Integration"]
    },
    {
        id: 1113,
        title: 'Business',
        price: '$24.71/m',
        crossedPrice: "$37.06",
        brief: "Best for commercial use where you want to keep in touch with client, it allows clients to make appointments, contact business or make inquiries",
        description: ["Website maintenance", "Support", "Make changes to website anytime", "Awesome SMS or Email Integration", "30% discount on Designer work"]
    },
    {
        id: 1114,
        title: 'Designer services',
        price: '$0-$250',
        brief: "Want your own website design? Our designer will make you best website on the market! Go for Logo, templates and landing pages",
        description: ["Logo", "Company Branding", "Custom website", "Fixed price", "Redesign of existing website", "Custom features"]
    }
]

export default function Pricing(props) {


    return (
        <div id="#prices" className="pricing-an">
            <h1>Prices & Plans</h1>
            <div className="pricing-flexbox">
                {
                    prices.map(item => (
                        <div key={item.id}
                             className={item.title === "Development" ? "price-flexbox-inner grey-bg" : "price-flexbox-inner"}>
                            <div className={item.id === 1113 ? "price-item-seller price-item" : "price-item"}>
                                <div>
                                    <h1>{item.price}</h1>
                                    {item.crossedPrice && <h3>{item.crossedPrice}</h3>}
                                    <h2>{item.title}</h2>
                                    {item.brief !== "" ? <p className="brief">{item.brief}</p> : <></>}
                                    <div className="description-area">
                                        {
                                            item.description.length > 1 &&
                                            item.description.map((desc, index) =>
                                                <span
                                                    className={desc === "No SMS or Email Integration" ? 'greyed listed' : 'listed'}
                                                    key={index}>
                                                {desc === "No SMS or Email Integration"
                                                    ? <Close sx={{color: "red"}}/>
                                                    : <Star
                                                        sx={{color: "#6e6e6e"}}/>}
                                                    {desc}</span>)
                                        }
                                        {
                                            item.description.length === 1 &&
                                            item.description[0]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="become-client-form">
                            <button
                                onClick={item.id === 1114 ? props.designer : props.start}
                                disabled={item.title === "Development"}
                                className={item.title === "Development" ? 'button-disabled' : ''}
                            >{item.title === "Development" ? 'You already have it!' : 'Get it now'}</button>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}