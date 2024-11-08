import { useEffect, useState } from 'react';
import { setPersonnels } from '../../store/user/UserSlice';
import axiosClient from '../../utils/axiosClient';
import { useDispatch } from 'react-redux';

const useFetchPersonnels = (url) => {
  const dispatch = useDispatch();

  // Error
  const [error, setError] = useState(null);
  const resetError = () => {
    setError(null);
  };

  // Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get('/personnels')
      .then(({ data }) => {
        dispatch(setPersonnels(data));
      })
      .catch(({ response: { data } }) => {
        setError(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [error, resetError, loading];
};

export default useFetchPersonnels;
