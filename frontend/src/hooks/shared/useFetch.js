import { useState } from 'react';
import axiosClient from '../../utils/axiosClient';

const useFetch = (url) => {
  // Data
  const [data, setData] = useState(null);

  // Error
  const [error, setError] = useState(null);
  const resetError = () => {
    setError(null);
  };

  // Loading
  const [loading, setLoading] = useState(false);

  // Handle Form
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill in all required fields!');
      setLoading(false);
      return;
    }

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
  };

  return [data, error, resetError, loading, handleChange, handleSubmit];
};

export default useFetch;
