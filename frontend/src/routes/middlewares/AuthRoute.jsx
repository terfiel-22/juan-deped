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
        // If student don't have a details, return student details form
        // If student is approved by registrar, return dashboard
    }

    return <FullLayout />;
};

export default AuthRoute;