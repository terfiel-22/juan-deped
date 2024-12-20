import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/UserSelector";
import { ROLE_ROUTES } from "../../constants/RoleRoutes";

const AuthRoute = () => {

    const currentUser = useSelector(selectCurrentUser);

    if (!currentUser) {
        return <Navigate to="/auth" />;
    }
    return <Navigate to={ROLE_ROUTES[currentUser.role]} />;
};

export default AuthRoute;