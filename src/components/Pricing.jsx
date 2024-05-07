import * as React from 'react'

const prices = [
    {
        id: 1111,
        title: 'Development',
        price: '$0.00',
        description: "Completely FREE website development, you won't be paying for development or when your website is not up and running"
    },
    {
        id: 1112,
        title: 'Basic Plan',
        price: '$16.98/m',
        description: "Basic plan is most recommended, it includes website maintenance and any changes you want to make in the future"
    },
    {
        id: 1113,
        title: 'Entrepreneur',
        price: '$25.98/m',
        description: "This plan includes sms or email integration, so you can receive formatted inquiries on your website, either question or contact form"
    },
    {
        id: 1113,
        title: 'Designer services',
        price: '$30-$250',
        description: "Want your own website design? Our designer will make you best website on the market! Go for Logo, templates and landing pages"
    }
]

export default function Pricing() {
    return (
        <div className="pricing-an">
            <h1>Prices</h1>
            <div className="pricing-flexbox">
                {
                    prices.map(item => (
                        <div key={item.id} className="price-item">
                            <h1>{item.price}</h1>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}