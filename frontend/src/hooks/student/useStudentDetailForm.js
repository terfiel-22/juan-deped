import { useCallback, useState } from 'react';

const useStudentDetailForm = () => {
  const [formFields, setFormFields] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    setFormFields((prevData) => {
      return {
        ...prevData,
        [name]:
          type === 'checkbox'
            ? checked
            : value === 'true' || value === 'false'
            ? value === 'true'
            : value,
      };
    });
  }, []);

  const handleSubmit = useCallback(() => {
    console.log(formFields);
  }, [formFields]);

  return { formFields, handleChange, handleSubmit };
};

export default useStudentDetailForm;
