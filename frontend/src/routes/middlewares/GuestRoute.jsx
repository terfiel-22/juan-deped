import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/UserSelector";

const GuestRoute = () => {

    const currentUser = useSelector(selectCurrentUser);

    if (currentUser) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default GuestRoute;