import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentStudent, setCurrentStudent } from '../../store/student/StudentSlice';

const useStudentDetailForm = () => {
  const dispatch = useDispatch();
  const currentStudent = useSelector(selectCurrentStudent);

  // const [formFields, setFormFields] = useState(currentStudent);
  const formFields = useMemo(() => currentStudent, [currentStudent]);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const _value =
        type === 'checkbox'
          ? checked
          : value === 'true' || value === 'false'
          ? value === 'true'
          : value;

      const updatedFormFields = {
        ...currentStudent,
        [name]: _value,
      };

      dispatch(setCurrentStudent(updatedFormFields));
    },
    [currentStudent],
  );

  const handleNestedChange = useCallback(
    (e, field) => {
      const { name, value, type, checked } = e.target;
      const _value =
        type === 'checkbox' ? checked : value === 'true' ? true : value === 'false' ? false : value;

      const updatedField = { ...currentStudent[field], [name]: _value };
      const updatedFormFields = { ...currentStudent, [field]: updatedField }; //Error here

      dispatch(setCurrentStudent(updatedFormFields));
    },
    [currentStudent],
  );

  const handleSubmit = useCallback(() => {}, []);

  return { formFields, handleChange, handleNestedChange, handleSubmit };
};

export default useStudentDetailForm;
