import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastError } from '../../utils/toastEmitter';

const useRead = ({ url, id = null, setter = null, selector = null }) => {
  const dispatch = useDispatch();
  const storedData = useSelector(selector);
  const [readLoading, setReadLoading] = useState(false);
  const [_data, setData] = useState(null);

  useEffect(() => {
    setReadLoading(true);
    let _url = id ? `${url}/${id}` : url;
    axiosClient
      .get(_url)
      .then(({ data }) => {
        if (setter) dispatch(setter(data));
        setData(data);
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setReadLoading(false);
      });
  }, [url, setter]);

  return { _data, storedData, readLoading };
};

export default useRead;
