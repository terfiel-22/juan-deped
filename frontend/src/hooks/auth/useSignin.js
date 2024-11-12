import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { setCurrentUser } from '../../store/user/UserSlice';

const useSignin = () => {
  const dispatch = useDispatch();
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
    const key = e.target.id;
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]: value,
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

  return [error, resetError, loading, handleChange, handleSubmit];
};

export default useSignin;
