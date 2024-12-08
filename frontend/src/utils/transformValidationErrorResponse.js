export const transformValidationErrorResponse = (errors) => {
  return errors.reduce((acc, item) => {
    const { path, msg } = item;
    if (!acc[path]) {
      acc[path] = msg;
    }
    return acc;
  }, {});
};
