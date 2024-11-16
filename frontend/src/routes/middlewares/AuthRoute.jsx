import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/UserSlice";
import FullLayout from "../../layouts/full/FullLayout";

const AuthRoute = () => {

    const currentUser = useSelector(selectCurrentUser);

    if (!currentUser) {
        return <Navigate to="/auth" />;
    }

    if (currentUser.role === "Student") {
        return <Navigate to="/student" />;
    }

    return <FullLayout />;
};

export default AuthRoute;