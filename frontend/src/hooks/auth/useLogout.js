import axiosClient from '../../utils/axiosClient';
import { selectCurrentUserRole, setCurrentUser } from '../../store/user/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { USER_ROLES_LOGIN_ROUTES } from '../../constants/UserRoles';

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Current User Role
  const role = useSelector(selectCurrentUserRole);

  const handleLogout = () => {
    axiosClient
      .post('/auth/logout')
      .then(({ data }) => {
        console.log(data.message);
        navigate(USER_ROLES_LOGIN_ROUTES[role]);
        dispatch(setCurrentUser(null));
      })
      .catch(({ response: { data } }) => {
        alert(data.message);
      });
  };

  return [role, handleLogout];
};

export default useLogout;
