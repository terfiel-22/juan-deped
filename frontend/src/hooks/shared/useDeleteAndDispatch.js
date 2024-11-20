import { useDispatch } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { toastError, toastSuccess } from '../../utils/toastEmitter';
import { useCallback, useState } from 'react';

const useDeleteAndDispatch = ({ url, formFields, setter }) => {
  const dispatch = useDispatch();

  // Loading
  const [deleteLoading, setLoading] = useState(false);

  const handleDelete = useCallback(() => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    setLoading(true);
    axiosClient
      .delete(`${url}/${formFields._id}`)
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

  return { deleteLoading, handleDelete };
};

export default useDeleteAndDispatch;
