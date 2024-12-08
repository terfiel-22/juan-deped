import { useCallback, useEffect, useState } from 'react';
import { ENHANCED_BEEF_STATE } from './enhanceBeefState';
import axiosClient from '../../../../utils/axiosClient';
import { toastError, toastSuccess } from '../../../../utils/toastEmitter';
import { transformValidationErrorResponse } from '../../../../utils/transformValidationErrorResponse';

const useEnhancedBeefForm = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(ENHANCED_BEEF_STATE);

  useEffect(() => {
    axiosClient
      .get('/learner/enhanced-beef')
      .then(({ data }) => {
        if (!data) return;
        setFormData(data);
      })
      .catch(({ response: { data } }) => {
        console.error(data.message);
      });
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const _value =
        type === 'checkbox'
          ? checked
          : value === 'true' || value === 'false'
          ? value === 'true'
          : value;
      setFormData({
        ...formData,
        [name]: _value,
      });
    },
    [formData],
  );

  const handleNestedChange = useCallback(
    (e, field) => {
      const { name, value, type, checked } = e.target;
      const _value =
        type === 'checkbox' ? checked : value === 'true' ? true : value === 'false' ? false : value;

      const updatedField = { ...formData[field], [name]: _value };
      const updatedFormData = { ...formData, [field]: updatedField };

      setFormData(updatedFormData);
    },
    [formData],
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    axiosClient
      .post('/learner/enhanced-beef', formData)
      .then(({ data }) => {
        toastSuccess(data.message);
      })
      .catch(({ response: { data } }) => {
        toastError(data.message);
        setErrors(transformValidationErrorResponse(data.errors));
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return { errors, formData, handleChange, handleNestedChange, handleSubmit, loading };
};

export default useEnhancedBeefForm;
