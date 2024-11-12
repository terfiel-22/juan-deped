import axiosClient from '../../utils/axiosClient';
import { selectCurrentUser, setCurrentUser } from '../../store/user/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Current User Role
  const user = useSelector(selectCurrentUser);

  const handleLogout = () => {
    axiosClient
      .post('/auth/logout')
      .then(({ data }) => {
        console.log(data.message);
        navigate('/auth');
        dispatch(setCurrentUser(null));
      })
      .catch(({ response: { data } }) => {
        alert(data.message);
      });
  };

  return [user, handleLogout];
};

export default useLogout;
