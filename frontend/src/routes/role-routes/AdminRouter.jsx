import { Navigate } from "react-router";
import { lazy } from "react";
import Loadable from "../../layouts/full/shared/loadable/Loadable";


const AdminRoute = Loadable(lazy(() => import("../middlewares/AdminRoute")));

/** PAGES */
const ModernDash = Loadable(lazy(() => import('../../views/dashboard/Modern')));
/** User Management */
const Accounts = Loadable(lazy(() => import('../../views/user-management/accounts/Accounts')));
const Personnels = Loadable(lazy(() => import('../../views/user-management/personnels/Personnels')));

/** SCHOOL FORMS */
const SHSF1 = Loadable(lazy(() => import('../../views/forms-and-cerificates/school-forms/SHSF1')));
const SHSF2 = Loadable(lazy(() => import('../../views/forms-and-cerificates/school-forms/SHSF2')));
const SHSF4 = Loadable(lazy(() => import('../../views/forms-and-cerificates/school-forms/SHSF4')));
const SHSF5A = Loadable(lazy(() => import('../../views/forms-and-cerificates/school-forms/SHSF5A')));
const SHSF5B = Loadable(lazy(() => import('../../views/forms-and-cerificates/school-forms/SHSF5B')));
const SHSF6 = Loadable(lazy(() => import('../../views/forms-and-cerificates/school-forms/SHSF6')));
const SHSF7 = Loadable(lazy(() => import('../../views/forms-and-cerificates/school-forms/SHSF7')));
const SF8 = Loadable(lazy(() => import('../../views/forms-and-cerificates/school-forms/SF8')));

/** School Management */
const School = Loadable(lazy(() => import('../../views/school-management/school/School')));
const Tracks = Loadable(lazy(() => import('../../views/school-management/career/tracks/Tracks')));
const Strands = Loadable(lazy(() => import('../../views/school-management/career/strands/Strands')));
const Specializations = Loadable(lazy(() => import('../../views/school-management/career/specializations/Specializations')));
const CoreSubjects = Loadable(lazy(() => import("../../views/school-management/subjects/core-subjects/CoreSubjects")));
const AppliedSubjects = Loadable(lazy(() => import("../../views/school-management/subjects/applied-subjects/AppliedSubjects")));
const SpecializedSubjects = Loadable(lazy(() => import("../../views/school-management/subjects/specialized-subjects/SpecializedSubjects")));

/** Enrollment Management */
const Schedules = Loadable(lazy(() => import('../../views/enrollment-management/schedules/Schedule.jsx')));
const EnrollmentRequirements = Loadable(lazy(() => import("../../views/enrollment-management/requirements/EnrollmentRequirements.jsx")));
const EnhancedBeefs = Loadable(lazy(() => import("../../views/enrollment-management/enhanced-beefs/EnhancedBeefs.jsx")));

export const ADMIN_ROUTER = {
    path: "/admin",
    element: <AdminRoute />,
    children: [
        { path: '/admin', element: <Navigate to="/admin/dashboard" /> },
        { path: '/admin/dashboard', element: <ModernDash /> },
        { path: '/admin/accounts', element: <Accounts /> },
        { path: '/admin/personnels', element: <Personnels /> },
        { path: '/admin/school-forms/shsf1', element: <SHSF1 /> },
        { path: '/admin/school-forms/shsf2', element: <SHSF2 /> },
        { path: '/admin/school-forms/shsf4', element: <SHSF4 /> },
        { path: '/admin/school-forms/shsf5a', element: <SHSF5A /> },
        { path: '/admin/school-forms/shsf5b', element: <SHSF5B /> },
        { path: '/admin/school-forms/shsf6', element: <SHSF6 /> },
        { path: '/admin/school-forms/shsf7', element: <SHSF7 /> },
        { path: '/admin/school-forms/sf8', element: <SF8 /> },
        { path: '/admin/school', element: <School /> },
        { path: '/admin/career/tracks', element: <Tracks /> },
        { path: '/admin/career/strands', element: <Strands /> },
        { path: '/admin/career/specializations', element: <Specializations /> },
        { path: '/admin/subject/core-subjects', element: <CoreSubjects /> },
        { path: '/admin/subject/applied-subjects', element: <AppliedSubjects /> },
        { path: '/admin/subject/specialized-subjects', element: <SpecializedSubjects /> },
        { path: '/admin/enrollment/schedules', element: <Schedules /> },
        { path: '/admin/enrollment/requirements', element: <EnrollmentRequirements /> },
        { path: '/admin/enrollment/enhanced-beefs', element: <EnhancedBeefs /> },
    ]
};