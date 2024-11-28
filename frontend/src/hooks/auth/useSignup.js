import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axiosClient from '../../utils/axiosClient';
import { toastError } from '../../utils/toastEmitter';
import { setCurrentUser } from '../../store/user/UserAction';

const useSignup = () => {
  const dispatch = useDispatch();

  // Loading
  const [loading, setLoading] = useState(false);

  // Handle Form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    lrn: '',
    password: '',
    cpassword: '',
    role: 'Student',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const { username, email, password, cpassword, role } = formData;

    if (!username || !email || !password || !cpassword || !role) {
      toastError('Please fill in all missing fields!');
      setLoading(false);
      return;
    }

    axiosClient
      .post('/auth/learner/register', formData)
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

  return { formData, loading, handleChange, handleSubmit };
};

export default useSignup;
