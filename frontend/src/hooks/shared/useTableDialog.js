import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/system';
import { useCallback, useState } from 'react';

const useTableDialog = ({ defaultFormData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenDialog = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  const [selectedData, _setSelectedData] = useState(defaultFormData);
  const setSelectedData = useCallback((data) => {
    _setSelectedData(data);
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    isFullScreen,
    handleOpenDialog,
    handleCloseDialog,
    selectedData,
    setSelectedData,
  };
};

export default useTableDialog;
