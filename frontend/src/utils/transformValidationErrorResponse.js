export const transformValidationErrorResponse = (errors) => {
  return errors.reduce((acc, item) => {
    const { path, msg } = item;
    setNestedValue(acc, path, msg);
    return acc;
  }, {});
};

const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  let current = obj;
  keys.forEach((key, index) => {
    if (!current[key]) {
      current[key] = index === keys.length - 1 ? value : {};
    }
    current = current[key];
  });
};
