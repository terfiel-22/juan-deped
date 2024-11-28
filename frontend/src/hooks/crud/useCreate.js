import { useCallback, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastError, toastSuccess } from '../../utils/toastEmitter';

const useCreate = ({ url, formData }) => {
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
      })
      .finally(() => {
        setCreateLoading(false);
      });
  }, [url, formData]);

  return { createLoading, handleCreate };
};

export default useCreate;
