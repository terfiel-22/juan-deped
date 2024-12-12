export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const isoDateFormatter = (isoDate) => {
  return new Date(isoDate);
};

export const dateToIsoString = (date) => {
  return new Date(date).toISOString();
};

export const dateToLocaleDateString = (date) => {
  return new Date(date).toLocaleDateString();
};

export const dateToDateString = (date) => {
  return new Date(date).toDateString();
};

export const dateFieldFormat = (date) => {
  const _date = new Date(date);
  const formatDate = _date.getDate() < 10 ? `0${_date.getDate()}` : _date.getDate();
  const formatMonth = _date.getMonth() < 10 ? `0${_date.getMonth()}` : _date.getMonth();
  return [_date.getFullYear(), formatMonth, formatDate].join('-');
};
