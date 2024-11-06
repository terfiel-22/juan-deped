import { useState } from 'react';

const usePasswordVisibility = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return [showPassword, handleClickShowPassword, handleMouseDownPassword];
};

export default usePasswordVisibility;
