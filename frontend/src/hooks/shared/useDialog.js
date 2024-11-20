import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/system';
import { useCallback, useState } from 'react';

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenDialog = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, isFullScreen, handleOpenDialog, handleCloseDialog };
};

export default useDialog;
