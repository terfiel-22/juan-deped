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
const StudentRoute = Loadable(lazy(() => import('./middlewares/StudentRoute')));

/** User Management */
const Personnels = Loadable(lazy(() => import('../views/user-management/personnels/Personnels')));

/** Career Management */
const Tracks = Loadable(lazy(() => import('../views/career-management/tracks/Tracks')));
const Strands = Loadable(lazy(() => import('../views/career-management/strands/Strands')));
const Specializations = Loadable(lazy(() => import('../views/career-management/specializations/Specializations')));

/** ERROR */
const PageNotFound = Loadable(lazy(() => import('../views/errors/PageNotFound')))

const Router = [
  /** Juan DepEd */
  {
    path: "/",
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/404', element: <PageNotFound /> },
    ]
  },
  {
    path: "/",
    element: <GuestRoute />,
    children: [
      { path: '/auth', element: <Authentication /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
      { path: '*', element: <Navigate to="/404" /> },
    ]
  },
  {
    path: "/",
    element: <AuthRoute />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', element: <ModernDash /> },
      { path: '/personnels', element: <Personnels /> },
      { path: '/tracks', element: <Tracks /> },
      { path: '/strands', element: <Strands /> },
      { path: '/specializations', element: <Specializations /> },
      { path: '*', element: <Navigate to="/404" /> },
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
];

export default Router;
