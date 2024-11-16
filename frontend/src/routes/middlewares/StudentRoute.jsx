import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/UserSlice";
import Loadable from "../../layouts/full/shared/loadable/Loadable";
import { lazy } from "react";
import { USER_ROLES } from "../../enums/UserRole";

const FullLayout = Loadable(lazy(() => import("../../layouts/full/FullLayout")));
const StudentDetailForm = Loadable(lazy(() => import('../../views/authentication/StudentDetailForm')));

const StudentRoute = () => {
    const currentUser = useSelector(selectCurrentUser);

    if (!currentUser) {
        return <Navigate to="/auth" />;
    }

    if (currentUser.role !== USER_ROLES.Student) {
        return <Navigate to="/" />;
    }

    if (!currentUser.isApproved) {
        return <StudentDetailForm />;
    }

    return <FullLayout />
}

export default StudentRoute