import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/UserSlice";

const UnAuthenticatedRoute = ({ children }) => {

    const currentUser = useSelector(selectCurrentUser);

    if (currentUser) {
        return <Navigate to="/dashboards/modern" />;
    }

    return children;
};

export default UnAuthenticatedRoute;