import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';
import { STUDENT_ROUTER } from './role-routes/StudentRouter';
import { ALUMNI_ROUTER } from './role-routes/AlumniRouter';
import { ADMIN_ROUTER } from './role-routes/AdminRouter';

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
const RegistrarRoute = Loadable(lazy(() => import('./middlewares/RegistrarRoute')));



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
    path: "/registrar",
    element: <RegistrarRoute />,
    children: [
      { path: '/registrar', element: <Navigate to="/registrar/dashboard" /> },
      { path: '/registrar/dashboard', element: <ModernDash /> },
    ]
  },
  ADMIN_ROUTER,
  ALUMNI_ROUTER,
  STUDENT_ROUTER,
  { path: '*', element: <Navigate to="/404" /> },
];

export default Router;
