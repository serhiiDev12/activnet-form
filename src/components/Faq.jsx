import * as React from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import {TreeItem} from "@mui/x-tree-view";

export default function Faq() {
    return (
        <div className="faq">
            <h1>Frequently asked questions</h1>
            <SimpleTreeView className="faq-tree">
                <TreeItem itemId="11" label="Will I be chaged with an aditional funds?" className="faq-tree-section">
                    <TreeItem itemId="grid-1" label="
                    All prices that presented in the prices section are total and won't change. The floating prices like google sponsorship are identified by client. Also .com, .us and other expencive domains are going to influence the invoice. If you decided to go with our own selection, we take price on us and won't charge you any additional price.
                    " className="faq-tree-item" />
                </TreeItem>
                <TreeItem itemId="12" label="If I select custom design for a website, does price includes development?" className="faq-tree-section">
                    <TreeItem itemId="pickers-12" label="Development is free, we charge only for design, and price can variate from 0 to $250. We'll make anything possible to save you money." className="faq-tree-item" />
                </TreeItem>
                <TreeItem itemId="13" label="What is an attendance of the website and how it improves my business?" className="faq-tree-section">
                    <TreeItem itemId="pickers-13" label="We expect more that 5 thousand visits a month from the start, if you'll add your website to the google maps, this will increase your leads significatly." className="faq-tree-item" />
                </TreeItem>
                <TreeItem itemId="14" label="When I'm starting to pay for the website?" className="faq-tree-section">
                    <TreeItem itemId="pickers-14" label="15 days from the date it's up and running. Running website can be expected to be up in 1 day to 2 weeks, depends on design efforts" className="faq-tree-item" />
                </TreeItem>
                <TreeItem itemId="15" label="Why you and not some website builder?" className="faq-tree-section">
                    <TreeItem itemId="pickers-15" label="Builders are cool but don't cost price and effort, usually it takes hours of your time to make a website, let alone publish it. Then you'll be paying twice as much as we offer, that disadvantage became a starter point of creating ActivNet" className="faq-tree-item" />
                </TreeItem>
                <TreeItem itemId="16" label="What is your refund policy?" className="faq-tree-section">
                    <TreeItem itemId="pickers-16" label="Same day return policy. If you used website for 1 day of a month and made a return, we'll compensate whole month of usage. If you decided to cancel website in a first month of use we'll substract the domain cost that we took on us" className="faq-tree-item" />
                </TreeItem>
                <TreeItem itemId="17" label="If I want to make changes on the website, how do I do it?" className="faq-tree-section">
                    <TreeItem itemId="pickers-17" label="Contact us with a special form and you can expect changes within an hour! Free of charge, just let us know" className="faq-tree-item" />
                </TreeItem>
            </SimpleTreeView>
        </div>
    )
}