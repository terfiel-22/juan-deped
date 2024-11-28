import { useCallback, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastError, toastSuccess } from '../../utils/toastEmitter';
import { useDispatch } from 'react-redux';

const useCreate = ({ url, formData, setter = null }) => {
  const dispatch = useDispatch();
  const [createLoading, setCreateLoading] = useState(false);

  const handleCreate = useCallback(() => {
    setCreateLoading(true);
    axiosClient
      .post(url, formData)
      .then(({ data }) => {
        toastSuccess(data.message);
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
        if (setter) dispatch(setter(data.result));
      })
      .finally(() => {
        setCreateLoading(false);
      });
  }, [url, formData]);

  return { createLoading, handleCreate };
};

export default useCreate;
