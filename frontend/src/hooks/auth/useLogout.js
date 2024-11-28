import axiosClient from '../../utils/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toastError } from '../../utils/toastEmitter';
import { selectCurrentUser } from '../../store/user/UserSelector';
import { setCurrentUser } from '../../store/user/UserAction';

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
