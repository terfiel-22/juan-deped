import { useCallback, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastError, toastSuccess } from '../../utils/toastEmitter';
import { useDispatch } from 'react-redux';

const useUpdate = ({ url, formData, setter = null }) => {
  const dispatch = useDispatch();
  const [updateLoading, setUpdateLoading] = useState(false);

  const handleUpdate = useCallback(() => {
    setUpdateLoading(true);
    axiosClient
      .put(url, formData)
      .then(({ data }) => {
        toastSuccess(data.message);
        if (setter) dispatch(setter(data.result));
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setUpdateLoading(false);
      });
  }, [url, formData, setter]);

  return { updateLoading, handleUpdate };
};

export default useUpdate;
