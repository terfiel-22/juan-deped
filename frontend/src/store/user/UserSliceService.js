export const addAuth = (auths, authToAdd) => {
  // find if auth is existing
  const existingAuth = auths.find((auth) => auth._id === authToAdd._id);

  // check if we have an existingAuth, return the original state
  if (existingAuth) return auths;

  // return the existing auths with the authToAdd
  return [...auths, { ...authToAdd }];
};

export const updateAuth = (auths, authToUpdate) => {
  return auths.map((auth) => (auth._id === authToUpdate._id ? { ...authToUpdate } : auth));
};

export const removeAuth = (auths, authToRemove) => {
  return auths.filter((auth) => auth._id !== authToRemove._id);
};
