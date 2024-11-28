import axiosClient from '../../../utils/axiosClient';
import { toastError } from '../../../utils/toastEmitter';
import { useEffect, useState } from 'react';

const useCreate = ({ url, id = null }) => {
  const [data, setData] = useState(null);
  const [readLoading, setReadLoading] = useState(false);

  useEffect(() => {
    setReadLoading(true);
    let _url = id ? `${url}/${id}` : url;
    axiosClient
      .get(_url)
      .then(({ data }) => {
        setData(data);
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setReadLoading(false);
      });
  }, [url]);

  return { data, readLoading, handleCreate };
};

export default useCreate;
