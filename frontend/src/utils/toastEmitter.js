import { Bounce, toast } from 'react-toastify';

const autoClose = 2000;

export const toastInfo = (message) =>
  toast.info(message, {
    position: 'top-right',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });

export const toastWarning = (message) =>
  toast.warn(message, {
    position: 'top-right',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });

export const toastSuccess = (message) =>
  toast.success(message, {
    position: 'top-right',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });

export const toastError = (message) =>
  toast.error(message, {
    position: 'top-right',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });
