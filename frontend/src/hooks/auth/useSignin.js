import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { selectCredentials, setCredentials, setCurrentUser } from '../../store/user/UserSlice';

const useSignin = () => {
  const dispatch = useDispatch();
  const savedCredentials = useSelector(selectCredentials);

  // Remember credentials
  const [remembered, setRemembered] = useState(false);
  const handleRemembered = () => {
    setRemembered(!remembered);
  };

  // Error
  const [error, setError] = useState(null);
  const resetError = () => {
    setError(null);
  };

  // Loading
  const [loading, setLoading] = useState(false);

  // Handle Form
  const [formData, setFormData] = useState(savedCredentials);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (remembered) dispatch(setCredentials(formData));

    setLoading(true);
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill in all required fields!');
      setLoading(false);
      return;
    }

    axiosClient
      .post('/auth/login', formData)
      .then(({ data }) => {
        dispatch(setCurrentUser(data));
      })
      .catch(({ response: { data } }) => {
        setError(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [
    formData,
    remembered,
    handleRemembered,
    error,
    resetError,
    loading,
    handleChange,
    handleSubmit,
  ];
};

export default useSignin;
