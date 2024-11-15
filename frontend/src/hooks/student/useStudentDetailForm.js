import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentStudent, setCurrentStudent } from '../../store/student/StudentSlice';

const useStudentDetailForm = () => {
  const dispatch = useDispatch();
  const currentStudent = useSelector(selectCurrentStudent);

  const [formFields, setFormFields] = useState(currentStudent);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const _value =
        type === 'checkbox'
          ? checked
          : value === 'true' || value === 'false'
          ? value === 'true'
          : value;

      setFormFields({
        ...formFields,
        [name]: _value,
      });
      dispatch(
        setCurrentStudent({
          ...formFields,
          [name]: _value,
        }),
      );
    },
    [setFormFields, formFields],
  );

  const handleNestedChange = useCallback(
    (e, field) => {
      const { name, value, type, checked } = e.target;
      const _value =
        type === 'checkbox' ? checked : value === 'true' ? true : value === 'false' ? false : value;

      const updatedField = { ...formFields[field], [name]: _value };
      const updatedFormFields = { ...formFields, [field]: updatedField };

      setFormFields(updatedFormFields);
      dispatch(setCurrentStudent(updatedFormFields));
    },
    [setFormFields, formFields],
  );

  const handleSubmit = useCallback(() => {}, []);

  return { formFields, handleChange, handleNestedChange, handleSubmit };
};

export default useStudentDetailForm;
