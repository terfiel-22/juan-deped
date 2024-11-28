import { useCallback, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastCloseTime, toastError, toastSuccess } from '../../utils/toastEmitter';

const useUpdate = ({ url, formData }) => {
  const [updateLoading, setUpdateLoading] = useState(false);

  const handleUpdate = useCallback(() => {
    setUpdateLoading(true);
    axiosClient
      .put(url, formData)
      .then(({ data }) => {
        toastSuccess(data.message);
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
        setTimeout(function () {
          window.location.reload();
        }, toastCloseTime);
      })
      .finally(() => {
        setUpdateLoading(false);
      });
  }, [url, formData]);

  return { updateLoading, handleUpdate };
};

export default useUpdate;
