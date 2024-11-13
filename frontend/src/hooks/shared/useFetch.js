import { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';

const useFetch = (url) => {
  // Data
  const [data, setData] = useState([]);

  // Error
  const [error, setError] = useState(null);
  const resetError = () => {
    setError(null);
  };

  // Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get(url)
      .then(({ data }) => {
        setData(data);
      })
      .catch(({ response: { data } }) => {
        setError(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, error, resetError, loading];
};

export default useFetch;
