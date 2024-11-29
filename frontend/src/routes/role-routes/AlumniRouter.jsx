import { Navigate } from "react-router";
import { lazy } from "react";
import Loadable from "../../layouts/full/shared/loadable/Loadable";


const AlumniRoute = Loadable(lazy(() => import("../middlewares/AlumniRoute")));

/** PAGES */

export const ALUMNI_ROUTER = {
    path: "/alumni",
    element: <AlumniRoute />,
    children: [
        { path: '/alumni', element: <Navigate to="/alumni/tracking" /> },
        { path: '/alumni/tracking', element: <h1>Tracking</h1> },
    ]
};