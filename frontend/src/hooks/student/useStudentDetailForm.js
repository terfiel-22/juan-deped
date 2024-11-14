import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentStudent } from '../../store/user/UserSlice';

const useStudentDetailForm = () => {
  const currentStudent = useSelector(selectCurrentStudent);
  const [formFields, setFormFields] = useState(
    currentStudent ?? {
      email: '',
      mobile: '',
      schoolYear: '',
      gradeLevelToEnroll: '11',
      withLRN: true,
      isReturnee: false,
    },
  );

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    setFormFields((prevState) => ({
      ...prevState,
      [name]:
        type === 'checkbox'
          ? checked
          : value === 'true' || value === 'false'
          ? value === 'true'
          : value,
    }));
  }, []);

  const handleNextForm = useCallback(() => {
    /** Save to the store changes */
    console.log(formFields);
  }, [formFields]);

  const handleSubmit = useCallback(() => {
    console.log(formFields);
  }, [formFields]);

  return [formFields, handleChange, handleNextForm, handleSubmit];
};

export default useStudentDetailForm;
