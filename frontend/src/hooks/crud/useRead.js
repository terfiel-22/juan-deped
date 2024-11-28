import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastError } from '../../utils/toastEmitter';

const useRead = ({ url, id = null, setter = null }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [readLoading, setReadLoading] = useState(false);

  useEffect(() => {
    setReadLoading(true);
    let _url = id ? `${url}/${id}` : url;
    axiosClient
      .get(_url)
      .then(({ data }) => {
        setData(data);
        if (setter) dispatch(setter(data));
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setReadLoading(false);
      });
  }, [url]);

  return { data, readLoading };
};

export default useRead;
