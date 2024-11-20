import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/UserSlice";
import Loadable from "../../layouts/full/shared/loadable/Loadable";
import { lazy } from "react";
import { USER_ROLES } from "../../constants/UserRoles";

const FullLayout = Loadable(lazy(() => import("../../layouts/full/FullLayout")));

const AdminRoute = () => {
    const currentUser = useSelector(selectCurrentUser);

    if (!currentUser) {
        return <Navigate to="/auth" />;
    }

    if (currentUser.role !== USER_ROLES.ADMINISTRATOR) {
        return <Navigate to="/" />;
    }

    return <FullLayout />
}

export default AdminRoute