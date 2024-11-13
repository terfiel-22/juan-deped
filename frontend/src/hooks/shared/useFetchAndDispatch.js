import { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { useDispatch, useSelector } from 'react-redux';

const useFetchAndDispatch = ({ url, setter, selector }) => {
  /** Dispatch/Select */
  const dispatch = useDispatch();
  const data = useSelector(selector);

  // Error
  const [error, setError] = useState(null);
  const resetError = () => {
    setError(null);
  };

  // Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get(url)
      .then(({ data }) => {
        dispatch(setter(data));
      })
      .catch(({ response: { data } }) => {
        setError(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, error, resetError, loading];
};

export default useFetchAndDispatch;
