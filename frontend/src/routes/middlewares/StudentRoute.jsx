import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/UserSlice";

const AuthRoute = () => {

    const currentUser = useSelector(selectCurrentUser);

    if (!currentUser) {
        return <Navigate to="/auth" />;
    }

    if (currentUser.role !== "Student") {
        return <Navigate to="/" />;
    }

    if (!currentUser.isApproved) {
        return <h1>Student Information</h1>
    }

    return <Outlet />;
};

export default AuthRoute;