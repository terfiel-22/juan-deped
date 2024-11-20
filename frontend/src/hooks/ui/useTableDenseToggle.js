import { useCallback, useState } from 'react';

const useTableDenseToggle = () => {
  const [dense, setDense] = useState(false);
  const handleChangeDense = useCallback((event) => {
    setDense(event.target.checked);
  }, []);

  return { dense, handleChangeDense };
};

export default useTableDenseToggle;
