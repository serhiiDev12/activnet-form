import * as React from 'react'
import {Star} from "@mui/icons-material";

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
        description: ["Website maintenance", "Support", "Make changes to website anytime", "No SMS or Email Integration"]
    },
    {
        id: 1113,
        title: 'Entrepreneur',
        price: '$24.71/m',
        description: ["Website maintenance", "Support", "Make changes to website anytime", "Awesome SMS or Email Integration", "30% discount on Designer work"]
    },
    {
        id: 1114,
        title: 'Designer services',
        price: '$0-$250',
        description: ["Want your own website design? Our designer will make you best website on the market! Go for Logo, templates and landing pages"]
    }
]

export default function Pricing() {
    return (
        <div id="#prices" className="pricing-an">
            <h1>Prices</h1>
            <div className="pricing-flexbox">
                {
                    prices.map(item => (
                        <div key={item.id} className="price-item">
                            {
                                item.id === 1113 &&
                                <div className="best-seller">
                                    Best Seller
                                    <Star sx={{color: "#fff"}}/>
                                </div>
                            }
                            <h1>{item.price}</h1>
                            <h2>{item.title}</h2>
                            <div className="description-area">
                                {
                                item.description.length > 1 &&
                                    item.description.map((desc, index) => <span key={index} className="listed"><Star
                                        sx={{color: "#279472"}}/>{desc}</span>)
                                }
                                {
                                    item.description.length === 1 &&
                                    item.description[0]
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}