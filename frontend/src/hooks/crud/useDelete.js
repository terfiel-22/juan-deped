import { useCallback, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastCloseTime, toastError, toastSuccess } from '../../utils/toastEmitter';

const useDelete = ({ url, id }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDelete = useCallback(() => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    setDeleteLoading(true);

    axiosClient
      .delete(`${url}/${id}`)
      .then(({ data }) => {
        toastSuccess(data.message);
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
        setTimeout(() => window.location.reload(), toastCloseTime);
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  }, [url]);

  return { deleteLoading, handleDelete };
};

export default useDelete;
