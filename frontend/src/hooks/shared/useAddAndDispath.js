import { useDispatch } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { toastError, toastSuccess } from '../../utils/toastEmitter';
import { useCallback, useState } from 'react';

const useAddAndDispath = ({ url, formFields, setter }) => {
  /** Dispatch/Select */
  const dispatch = useDispatch();

  // Loading
  const [loading, setLoading] = useState(true);

  const handleSubmit = useCallback(() => {
    axiosClient
      .post(url, formFields)
      .then(({ data }) => {
        dispatch(setter(data.user));
        toastSuccess(data.message);
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, formFields]);

  return { loading, handleSubmit };
};

export default useAddAndDispath;
