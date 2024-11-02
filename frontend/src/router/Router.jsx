import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1 className="text-3xl font-bold underline">
            Welcome to Juan DepEd
        </h1>,
    },
]);

export default router;