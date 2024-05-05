import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import InquiryForm from "./pages/InquiryForm";
import TemplateOne from "./websites/template1/TemplateOne";
import TemplateTwo from "./websites/template2/TemplateTwo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/order-website",
        element: <InquiryForm />,
    },
    {
        path: "/order-website/templateOne/:inFrame",
        element: <TemplateOne />,
    },
    {
        path: "/order-website/templateTwo/:inFrame",
        element: <TemplateTwo />,
    },
]);