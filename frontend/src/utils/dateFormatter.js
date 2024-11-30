export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const isoDateFormatter = (isoDate) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const hrs = date.getDate();
  const mins = date.getDate();

  return new Date(year, month, dayOfMonth, hrs, mins);
};
