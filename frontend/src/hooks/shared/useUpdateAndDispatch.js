import { useDispatch } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { toastError, toastSuccess } from '../../utils/toastEmitter';
import { useCallback, useState } from 'react';

const useUpdateAndDispatch = ({ url, formFields, setter }) => {
  const dispatch = useDispatch();

  // Loading
  const [updateLoading, setLoading] = useState(false);

  const handleUpdate = useCallback(() => {
    setLoading(true);
    axiosClient
      .put(url, formFields)
      .then(({ data }) => {
        dispatch(setter(data.result));
        toastSuccess(data.message);
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, formFields]);

  return { updateLoading, handleUpdate };
};

export default useUpdateAndDispatch;
