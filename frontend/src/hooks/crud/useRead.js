import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastError } from '../../utils/toastEmitter';

const useRead = ({ url, id = null, setter, selector }) => {
  const dispatch = useDispatch();
  const storedData = useSelector(selector);
  const [readLoading, setReadLoading] = useState(false);

  useEffect(() => {
    setReadLoading(true);
    let _url = id ? `${url}/${id}` : url;
    axiosClient
      .get(_url)
      .then(({ data }) => {
        dispatch(setter(data));
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setReadLoading(false);
      });
  }, [url, setter]);

  return { storedData, readLoading };
};

export default useRead;
