import { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { toastError } from '../../utils/toastEmitter';

const useFetchAndDispatch = ({ url, setter, selector }) => {
  /** Dispatch/Select */
  const dispatch = useDispatch();
  const data = useSelector(selector);

  // Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get(url)
      .then(({ data }) => {
        dispatch(setter(data));
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetchAndDispatch;
