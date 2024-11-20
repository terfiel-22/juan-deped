import axiosClient from '../../utils/axiosClient';
import { selectCurrentUser, setCurrentUser } from '../../store/user/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toastError } from '../../utils/toastEmitter';

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Current User Role
  const user = useSelector(selectCurrentUser);

  const handleLogout = () => {
    axiosClient
      .post('/auth/logout')
      .then(() => {
        navigate('/auth');
        dispatch(setCurrentUser(null));
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      });
  };

  return { user, handleLogout };
};

export default useLogout;
