import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/UserSlice";

const GuestRoute = () => {

    const currentUser = useSelector(selectCurrentUser);

    if (currentUser) {
        return <Navigate to="/dashboard" />;
    }

    return <Outlet />;
};

export default GuestRoute;