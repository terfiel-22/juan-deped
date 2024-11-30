import { Navigate } from "react-router";
import { lazy } from "react";
import Loadable from "../../layouts/full/shared/loadable/Loadable";


const StudentRoute = Loadable(lazy(() => import("../middlewares/StudentRoute")));

/** PAGES */
const EnhancedBeef = Loadable(lazy(() => import("../../views/learner-views/enhanced-beef/EnhancedBeef")));
const LearnerSchedules = Loadable(lazy(() => import("../../views/learner-views/schedules/LearnerSchedules")));

export const STUDENT_ROUTER = {
    path: "/student",
    element: <StudentRoute />,
    children: [
        { path: '/student', element: <Navigate to="/student/enhanced-beef" /> },
        { path: '/student/enhanced-beef', element: <EnhancedBeef /> },
        { path: '/student/schedules', element: <LearnerSchedules /> },
    ]
};