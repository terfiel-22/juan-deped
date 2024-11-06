import axiosClient from '../../utils/axiosClient';
import { setCurrentUser } from '../../store/user/UserSlice';
import { useDispatch } from 'react-redux';

const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    axiosClient
      .post('/auth/logout')
      .then(({ data }) => {
        alert(data.message);
        dispatch(setCurrentUser(null));
      })
      .catch(({ response: { data } }) => {
        alert(data.message);
      });
  };

  return handleLogout;
};

export default useLogout;
