import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import InquiryForm from "./pages/InquiryForm";
import TemplateOne from "./websites/template1/TemplateOne";

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
        path: "/order-website/template/:inFrame",
        element: <TemplateOne />,
    },
]);