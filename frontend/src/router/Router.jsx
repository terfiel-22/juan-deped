import {
    createBrowserRouter,
} from "react-router-dom";
import AuthLayout from "../pages/authentication/layout/AuthLayout";
import Login from "../pages/authentication/login/Login";
import Register from "../pages/authentication/register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1 className="text-3xl font-bold underline">
            Welcome to Juan DepEd
        </h1>,
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    },
]);

export default router;