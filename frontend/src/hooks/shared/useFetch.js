import { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';

const useFetch = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosClient
      .get(url)
      .then(({ data }) => {
        setData(data);
      })
      .catch(({ response: { data } }) => {
        console.error(data.message);
      });
  }, [url]);

  return { data };
};

export default useFetch;
