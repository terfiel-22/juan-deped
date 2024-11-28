import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { setCurrentStudentEmail, setCurrentStudentLRN } from '../../store/student/StudentSlice';
import { USER_ROLES } from '../../constants/UserRoles';
import { toastError } from '../../utils/toastEmitter';
import { selectCredentials } from '../../store/user/UserSelector';
import { setCredentials, setCurrentUser } from '../../store/user/UserAction';

const useSignin = () => {
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

  const handleSubmit = () => {
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
      .post('/auth/login', formData)
      .then(({ data }) => {
        dispatch(setCurrentUser(data));
        if (data.role === USER_ROLES.STUDENT) {
          dispatch(setCurrentStudentEmail(data.email));
          dispatch(setCurrentStudentLRN(data.learnerReferenceNo));
        }
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
