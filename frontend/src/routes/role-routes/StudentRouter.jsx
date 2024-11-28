import { Navigate } from "react-router";
import { lazy } from "react";
import Loadable from "../../layouts/full/shared/loadable/Loadable";


const StudentRoute = Loadable(lazy(() => import("../middlewares/StudentRoute")));

/** PAGES */
const EnhancedBeef = Loadable(lazy(() => import("../../views/student-views/enhanced-beef/EnhancedBeef")));

export const STUDENT_ROUTER = [
    {
        path: "/student",
        element: <StudentRoute />,
        children: [
            { path: '/student', element: <Navigate to="/student/enhanced-beef" /> },
            { path: '/student/enhanced-beef', element: <EnhancedBeef /> },
        ]
    },
]