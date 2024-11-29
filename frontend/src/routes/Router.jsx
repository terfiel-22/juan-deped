import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';
import { STUDENT_ROUTER } from './role-routes/StudentRouter';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Dashboard***** */
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Modern')));

/** Authentication */
const PersonnelAuthentication = Loadable(lazy(() => import('../views/authentication/PersonnelAuthentication')));
const Authentication = Loadable(lazy(() => import('../views/authentication/Authentication')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/ForgotPassword')));


/** Middleware */
const GuestRoute = Loadable(lazy(() => import('./middlewares/GuestRoute')));
const AuthRoute = Loadable(lazy(() => import('./middlewares/AuthRoute')));
const AdminRoute = Loadable(lazy(() => import('./middlewares/AdminRoute')));
const RegistrarRoute = Loadable(lazy(() => import('./middlewares/RegistrarRoute')));
const AlumniRoute = Loadable(lazy(() => import('./middlewares/AlumniRoute')));

/** User Management */
const Accounts = Loadable(lazy(() => import('../views/user-management/accounts/Accounts')));
const Personnels = Loadable(lazy(() => import('../views/user-management/personnels/Personnels')));

/** SCHOOL FORMS */
const SHSF1 = Loadable(lazy(() => import('../views/forms-and-cerificates/school-forms/SHSF1')));
const SHSF2 = Loadable(lazy(() => import('../views/forms-and-cerificates/school-forms/SHSF2')));
const SHSF4 = Loadable(lazy(() => import('../views/forms-and-cerificates/school-forms/SHSF4')));
const SHSF5A = Loadable(lazy(() => import('../views/forms-and-cerificates/school-forms/SHSF5A')));
const SHSF5B = Loadable(lazy(() => import('../views/forms-and-cerificates/school-forms/SHSF5B')));
const SHSF6 = Loadable(lazy(() => import('../views/forms-and-cerificates/school-forms/SHSF6')));
const SHSF7 = Loadable(lazy(() => import('../views/forms-and-cerificates/school-forms/SHSF7')));
const SF8 = Loadable(lazy(() => import('../views/forms-and-cerificates/school-forms/SF8')));


/** School Management */
const School = Loadable(lazy(() => import('../views/school-management/school/School')));
const Tracks = Loadable(lazy(() => import('../views/school-management/tracks/Tracks')));
const Strands = Loadable(lazy(() => import('../views/school-management/strands/Strands')));
const Specializations = Loadable(lazy(() => import('../views/school-management/specializations/Specializations')));

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
      { path: '/auth/personnel', element: <PersonnelAuthentication /> },
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
      { path: '/admin/school-forms/shsf1', element: <SHSF1 /> },
      { path: '/admin/school-forms/shsf2', element: <SHSF2 /> },
      { path: '/admin/school-forms/shsf4', element: <SHSF4 /> },
      { path: '/admin/school-forms/shsf5a', element: <SHSF5A /> },
      { path: '/admin/school-forms/shsf5b', element: <SHSF5B /> },
      { path: '/admin/school-forms/shsf6', element: <SHSF6 /> },
      { path: '/admin/school-forms/shsf7', element: <SHSF7 /> },
      { path: '/admin/school-forms/sf8', element: <SF8 /> },
      { path: '/admin/school', element: <School /> },
      { path: '/admin/tracks', element: <Tracks /> },
      { path: '/admin/strands', element: <Strands /> },
      { path: '/admin/specializations', element: <Specializations /> },
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
    path: "/alumni",
    element: <AlumniRoute />,
    children: [
      { path: '/alumni', element: <Navigate to="/alumni/dashboard" /> },
      { path: '/alumni/dashboard', element: <ModernDash /> },
    ]
  },
  ...STUDENT_ROUTER,
  { path: '*', element: <Navigate to="/404" /> },
];

export default Router;
