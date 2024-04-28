import React from 'react';
import {Avatar, Rating} from "@mui/material";

const Testimonials = () => (
    <div className="testemonials">
        <h3>WHAT DO PEOPLE SAY ABOUT US</h3>
        <p>Lorem ipsum dolor sit amet consectetur.
            Ultrices porttitor sed proin enim id. Sit etiam pulvinar libero nullam tristique volutpat commodo ultrices est.
            Tincidunt arcu in sociis leo tincidunt. A eget turpis luctus tempor. </p>
        <div className="testemonials-list">
            <div className="testemonial">
                <div className="account">
                    <div className="mainreview">
                        <Avatar/>
                        <div>
                            <p className="account-name">Sophia Doe</p>
                        </div>
                    </div>
                    <div className="review-text">
                        <Rating name="read-only" value={5} readOnly className="rating"/>
                        <p> Et eligendi Accusantium qui est eius nemo...</p>
                    </div>
                    <div className="time-stamp">
                        <p>Posted on Google 1 day ago</p>
                    </div>
                </div>
            </div>
            <div className="testemonial">
                <div className="account">
                    <div className="mainreview">
                        <Avatar/>
                        <div>
                            <p className="account-name">Sophia Doe</p>
                        </div>
                    </div>
                    <div className="review-text">
                        <Rating name="read-only" value={5} readOnly className="rating"/>
                        <p> Et eligendi Accusantium qui est eius nemo...</p>
                    </div>
                    <div className="time-stamp">
                        <p>Posted on Google 1 day ago</p>
                    </div>
                </div>
            </div>
            <div className="testemonial">
                <div className="account">
                    <div className="mainreview">
                        <Avatar/>
                        <div>
                            <p className="account-name">Sophia Doe</p>
                        </div>
                    </div>
                    <div className="review-text">
                        <Rating name="read-only" value={5} readOnly className="rating"/>
                        <p> Et eligendi Accusantium qui est eius nemo...</p>
                    </div>
                    <div className="time-stamp">
                        <p>Posted on Google 1 day ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Testimonials;