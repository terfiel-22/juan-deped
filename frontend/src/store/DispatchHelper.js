export const addItem = (items, itemToAdd) => {
  const existingItem = items.find((item) => item._id === itemToAdd._id);
  if (existingItem) return items;

  return [...items, { ...itemToAdd }];
};

export const updateItem = (items, itemToUpdate) => {
  return items.map((item) => (item._id === itemToUpdate._id ? { ...itemToUpdate } : item));
};

export const removeItem = (items, itemToRemove) => {
  return items.filter((item) => item._id !== itemToRemove._id);
};
