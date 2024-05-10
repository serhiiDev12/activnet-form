import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import InquiryForm from "./pages/InquiryForm";
import TemplateOne from "./websites/template1/TemplateOne";
import TemplateTwo from "./websites/template2/TemplateTwo";
import TemplateThree from "./websites/template3/TemplateThree";
import Designer from "./pages/Designer";
import SuccessPage from "./pages/SuccessPage";

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
        path: "/order-design",
        element: <Designer />,
    },
    {
        path: "/success",
        element: <SuccessPage />,
    },
    {
        path: "/order-website/templateOne/:inFrame",
        element: <TemplateOne />,
    },
    {
        path: "/order-website/templateTwo/:inFrame",
        element: <TemplateTwo />,
    },
    {
        path: "/order-website/templateThree/:inFrame",
        element: <TemplateThree />,
    },
]);