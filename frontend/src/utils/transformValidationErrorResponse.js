export const transformValidationErrorResponse = (errors) => {
  const formattedObject = errors.reduce((acc, item) => {
    const { path, msg } = item;
    if (!acc[path]) {
      acc[path] = msg;
    }
    return acc;
  }, {});

  console.log(formattedObject);
};
