import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { toastError } from '../../utils/toastEmitter';
import { selectCredentials } from '../../store/user/UserSelector';
import { setCredentials, setCurrentUser } from '../../store/user/UserAction';

const useSignin = ({ url }) => {
  const dispatch = useDispatch();
  const savedCredentials = useSelector(selectCredentials);

  // Loading
  const [loading, setLoading] = useState(false);

  // Handle Form
  const [formData, setFormData] = useState(savedCredentials);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const _value =
      type === 'checkbox' ? checked : value === 'true' ? true : value === 'false' ? false : value;

    setFormData({
      ...formData,
      [name]: _value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, remembered } = formData;

    if (remembered) {
      dispatch(setCredentials(formData));
    }

    setLoading(true);

    if (!email || !password) {
      toastError('Please fill in all required fields!');
      setLoading(false);
      return;
    }

    axiosClient
      .post(url, formData)
      .then(({ data }) => {
        dispatch(setCurrentUser(data));
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useSignin;
