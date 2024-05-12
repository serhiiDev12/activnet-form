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
import TemplateViewer from "./pages/TemplateViewer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/website-viewer",
        element: <TemplateViewer />,
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
        path: "/order-website/templateOne/:color",
        element: <TemplateOne />,
    },
    {
        path: "/order-website/templateTwo/:color",
        element: <TemplateTwo />,
    },
    {
        path: "/order-website/templateThree/:color",
        element: <TemplateThree />,
    },
]);