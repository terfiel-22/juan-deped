import { useCallback, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastError, toastSuccess } from '../../utils/toastEmitter';
import { useDispatch } from 'react-redux';

const useDelete = ({ url, formData, setter = null }) => {
  const dispatch = useDispatch();
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDelete = useCallback(() => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    setDeleteLoading(true);

    axiosClient
      .delete(`${url}/${formData._id}`)
      .then(({ data }) => {
        toastSuccess(data.message);
        if (setter) dispatch(setter(data.result));
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  }, [url, formData, setter]);

  return { deleteLoading, handleDelete };
};

export default useDelete;
