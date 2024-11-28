import { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { toastError } from '../../utils/toastEmitter';

const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [dataArray, setDataArray] = useState([]);
  const [readLoading, setReadLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    setReadLoading(true);
    axiosClient
      .get(url)
      .then(({ data }) => {
        if (Array.isArray(data)) setDataArray(data);
        else setData(data);
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setReadLoading(false);
      });
  }, [url]);

  return { data, dataArray, readLoading };
};

export default useFetch;
