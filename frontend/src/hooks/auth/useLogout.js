import axiosClient from '../../utils/axiosClient';
import { setCurrentUser } from '../../store/user/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { USER_ROLES_LOGIN_ROUTES } from '../../constants/UserRoles';

const useLogout = (role) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return handleLogout;
};

export default useLogout;
