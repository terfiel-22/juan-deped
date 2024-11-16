import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { selectCredentials, setCredentials, setCurrentUser } from '../../store/user/UserSlice';
import { credentialsInitState } from '../../store/user/UserSliceInitStates';
import { setCurrentStudentEmail, setCurrentStudentLRN } from '../../store/student/StudentSlice';

const useSignin = () => {
  const dispatch = useDispatch();
  const savedCredentials = useSelector(selectCredentials);

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
    const { name, value, checked, type } = e.target;
    const _value =
      type === 'checkbox' ? checked : value === 'true' ? true : value === 'false' ? false : value;

    setFormData({
      ...formData,
      [name]: _value,
    });
  };

  const handleSubmit = () => {
    const { email, password, remembered } = formData;

    if (remembered) {
      dispatch(setCredentials(formData));
    } else {
      dispatch(setCredentials(credentialsInitState));
    }

    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all required fields!');
      setLoading(false);
      return;
    }

    axiosClient
      .post('/auth/login', formData)
      .then(({ data }) => {
        dispatch(setCurrentUser(data));
        if (data.role === 'Student') {
          dispatch(setCurrentStudentEmail(data.email));
          dispatch(setCurrentStudentLRN(data.learnerReferenceNo));
        }
      })
      .catch(({ response: { data } }) => {
        setError(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    formData,
    error,
    resetError,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useSignin;
