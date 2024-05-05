import * as React from 'react';

export default function Header(props) {
    return (
        <div className="templatetwo-header">
            <div className="templatetwo-header-textarea">
                <h2 className="templatetwo-header-h2">
                    Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="templatetwo-header-p">
                    Lorem ipsum dolor sit amet consectetur. Lacus id nullam viverra quisque purus enim.
                    Nisi at at quam suspendisse id bibendum nullam. Non morbi dignissim.
                </p>
                <button className="templatetwo-header-button" onClick={() => props.setOpenClose(true)}>Make Inquiry</button>
            </div>
            <div className="templatetwo-img">
                <img className="itemplatetwo-img-c" src="https://images.unsplash.com/photo-1617565817140-53081ee8f047?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            </div>
        </div>
    );
}