import * as React from 'react';
import {useEffect} from "react";

export default function TemplateSelector(props) {
    useEffect(() => {
        console.log(props.selectedTemplateId)
    }, [props.selectedTemplateId]);
    return (
        <>
            <h4>Select Ready Template</h4>
            <div className="template-selector">
                {
                    props.templates.map((item, index) => (
                        <div key={index} className="template-item" style={
                            {
                                backgroundImage: `url("${item.src}")`,
                                filter: props.selectedTemplateId === item.id ? "brightness(60%)": "none"}}
                             onClick={() => props.selectTemplate(item.id)}>
                            {
                                props.selectedTemplateId === item.id &&
                                <div className="selected-template">
                                    <h4 style={{color: "white"}}>Selected</h4>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </>
    );
}