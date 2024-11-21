import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Dashboard***** */
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Modern')));

/** Authentication */
const Authentication = Loadable(lazy(() => import('../views/authentication/Authentication')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/ForgotPassword')));


/** Middleware */
const GuestRoute = Loadable(lazy(() => import('./middlewares/GuestRoute')));
const AuthRoute = Loadable(lazy(() => import('./middlewares/AuthRoute')));
const AdminRoute = Loadable(lazy(() => import('./middlewares/AdminRoute')));
const RegistrarRoute = Loadable(lazy(() => import('./middlewares/RegistrarRoute')));
const StudentRoute = Loadable(lazy(() => import('./middlewares/StudentRoute')));

/** User Management */
const Accounts = Loadable(lazy(() => import('../views/user-management/accounts/Accounts')));
const Personnels = Loadable(lazy(() => import('../views/user-management/personnels/Personnels')));

/** Career Management */
const Tracks = Loadable(lazy(() => import('../views/career-management/tracks/Tracks')));
const Strands = Loadable(lazy(() => import('../views/career-management/strands/Strands')));
const Specializations = Loadable(lazy(() => import('../views/career-management/specializations/Specializations')));

/** Reports */
const SchoolForms = Loadable(lazy(() => import('../views/reports/SchoolForms')));

/** ERROR */
const PageNotFound = Loadable(lazy(() => import('../views/errors/PageNotFound')))

const Router = [
  /** Juan DepEd */
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      { path: '/', element: <AuthRoute /> },
      { path: '/404', element: <PageNotFound /> },
    ]
  },
  {
    path: "/",
    element: <GuestRoute />,
    children: [
      { path: '/auth', element: <Authentication /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
    ]
  },
  {
    path: "/admin",
    element: <AdminRoute />,
    children: [
      { path: '/admin', element: <Navigate to="/admin/dashboard" /> },
      { path: '/admin/dashboard', element: <ModernDash /> },
      { path: '/admin/accounts', element: <Accounts /> },
      { path: '/admin/personnels', element: <Personnels /> },
      { path: '/admin/tracks', element: <Tracks /> },
      { path: '/admin/strands', element: <Strands /> },
      { path: '/admin/specializations', element: <Specializations /> },
      { path: '/admin/school-forms', element: <SchoolForms /> },
    ]
  },
  {
    path: "/registrar",
    element: <RegistrarRoute />,
    children: [
      { path: '/registrar', element: <Navigate to="/registrar/dashboard" /> },
      { path: '/registrar/dashboard', element: <ModernDash /> },
    ]
  },
  {
    path: "/student",
    element: <StudentRoute />,
    children: [
      { path: '/student', element: <Navigate to="/student/dashboard" /> },
      { path: '/student/dashboard', element: <ModernDash /> },
    ]
  },
  { path: '*', element: <Navigate to="/404" /> },
];

export default Router;
