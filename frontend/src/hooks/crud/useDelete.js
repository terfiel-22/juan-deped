import { useCallback, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastError, toastSuccess } from '../../utils/toastEmitter';
import { useDispatch } from 'react-redux';

const useDelete = ({ url, id, setter = null }) => {
  const dispatch = useDispatch();
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
        if (setter) dispatch(setter(data.result));
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  }, [url]);

  return { deleteLoading, handleDelete };
};

export default useDelete;
