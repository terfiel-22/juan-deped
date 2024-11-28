import { useCallback, useMemo, useState } from 'react';
import { ENHANCED_BEEF_STATE } from './enhanceBeefState';

const useEnhancedBeefForm = () => {
  // Loading
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(ENHANCED_BEEF_STATE);

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
    console.log(formData);
  });

  return { formData, handleChange, handleNestedChange, handleSubmit, loading };
};

export default useEnhancedBeefForm;
