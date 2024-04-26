import * as React from 'react'
import './mainStyles.css'
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "./Loading";

export default function MainPage() {
    const [showLoading, setShowLoading] = useState(true)
    let navigate = useNavigate();

    useEffect(() => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false);
        }, 600)
    }, [navigate])
    
    const startWebsiteCreate = () => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false);
        }, 400)
        navigate('/order-website');
    }

    return (
        <div className="wrapper">
            {
                showLoading &&
                <Loading />
            }
            <header>
                <nav>
                    <img className="activnet" src="./logo.svg" alt="ActivNet" />
                        <a>About</a>
                        <a>Features</a>
                        <a>Pricing</a>
                </nav>
            </header>
            <main>
                <section id="about">
                    <div className="about-div">
                        <div className="Contact-us">
                            <p className="header-1">Our Services</p>
                            <p>We provide web development, maintaining, UI/UX design services and google marketing of your brand new business website. Our goal is help businesses to get their website cheap and without spending tons of hours building it. You need only enjoy your business and revenue growth</p>
                            <a className="mui-button contact-button" onClick={startWebsiteCreate}>GET STARTED</a>
                        </div>
                        <div className="info">
                            <h1 className="header-1-moto">Growing your Business with</h1>
                            <img src="./name.svg" alt="ActivNet" className="logo-name" />
                                <p>Most of our clients experience huge improvements in their business, due to the representation in web. This helps to build bigger client base and advertise your services and strong sides</p>
                        </div>
                    </div>
                </section>
                <section id="about-services">
                    <div className="service-description">
                        <h2 className="about-header">About Us</h2>
                        <div className="underline"></div>
                        <p>We provide our clients with well-built unique websites with set up SEO. More over we specialize on promotions, like Google sponsorship, custom designs, and marketing for extremely low price</p>
                    </div>
                    <div className="flex-container">
                        <div className="box">
                            <img className="icon" src="./web.svg" />
                                <h3>Web Marketing</h3>
                                <p>Since website is a key for successful business now days, representation of your business in the WEB can significantly increase your client range and income</p>
                        </div>

                        <div className="box">
                            <img className="icon" src="./chart.svg" />
                                <h3>Advertisements</h3>
                                <p>We can provide a campaign of advertisements that can be seen for everybody, proven that outcome from that activity is more clients</p>
                        </div>

                        <div className="box">
                            <img className="icon" src="./free.svg" />
                                <h3>Free Development</h3>
                                <p>We don't charge for development of your website, our goal save you money and time</p>
                        </div>

                        <div className="box">
                            <img className="icon" src="./design.svg" />
                                <h3>Custom design</h3>
                                <p>Be creative, our designer is ready to help you implement what's on your mind</p>
                        </div>
                    </div>
                </section>
                <section id="choose-ready-template">
                    <h3>Choose template you like</h3>
                    <p>We offer a wide range of professionally designed landing pages, to suit every business need. Browse through or contact us for implementing your own website</p>
                    <div className="website-carousel">
                        <div className=""></div>
                    </div>
                </section>
                <section id="how-to-create">
                    <div className="how-to-div">
                        <div className="icon-list">
                            <img src="./HowItWorks.svg" alt="" />
                        </div>
                        <div className="text-div">
                            <h2>How to get your website?</h2>
                            <p>First you need to contact us with an email and tell us details about your business</p>
                            <p>In the email include you business name, type, and short description about what you do</p>
                            <p>Then we'll confirm your order and you will be directed to our designer, she will send you couple of our ready templates or you can proceed with your custom design</p>
                            <p>Once done, we'll send you our monthly plan and you proceed with your website right away</p>
                            <p>After all steps done you're free to order Google sponsorship and other ways to promote your business</p>
                            <p>Even if you have other questions please let us know</p>
                            <a className="mui-button contact-button" onClick={startWebsiteCreate}>GET STARTED</a>
                        </div>
                    </div>
                </section>
                <section id="pricing">
                    <h1 className="pricing-header">Pricing</h1>
                    <p className="pricing-subtext">Choose from our flexible pricing options and find the perfect package for your needs.</p>
                    <div className="pricing-carousel">
                        <div className="pricing-box always-included">
                            <h2>Development</h2>
                            <p>Development is always FREE, any changes, website development is completely free. We stick to our policy of affordable website</p>
                            <h1>$0.00</h1>
                        </div>
                        <div className="pricing-box">
                            <h2>Basic package</h2>
                            <p>This package includes life-long website maintenance, as well as domain price. If you go for ready template, you won't be paying for any changes you need to do in the website, only maintenance and hosting</p>
                            <h1>$16.23/month</h1>
                        </div>
                        <div className="pricing-box">
                            <h2>Standard package</h2>
                            <p>This package includes life-long website maintenance, domain price and sweet sms/email leads integration that will go directly to your device. Means people can make inquiries on your website and you'll be receiving it by sms or email.</p>
                            <h1>$25.13/month</h1>
                        </div>
                        <div className="pricing-box">
                            <h2>Advertisements</h2>
                            <p>We use TikTok and Google Ads campaign to advertise your business. The price depends on price of marketing campaign</p>
                            <p className="variable-price">Price depends on work to be done</p>
                        </div>
                        <div className="pricing-box">
                            <h2>Design services</h2>
                            <p>From small change, logo or complete website design, our Designer ready to help you. We can help you build it from scratch or redesign your own website</p>
                            <p className="variable-price">Price depends on work to be done</p>
                        </div>
                    </div>
                    <a className="mui-button button-primary" onClick={startWebsiteCreate}>GET WEBSITE NOW!!</a>
                </section>
                <footer>
                    <div className="flex-box">
                        <div>
                            <img src="./ActivNet.svg" alt="ActivNet" />
                                <p>Easiest way to create a website and get it for free</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="copyright">Copyright ActivNet, All rights reserved</div>
                </footer>
            </main>
        </div>
    )
}