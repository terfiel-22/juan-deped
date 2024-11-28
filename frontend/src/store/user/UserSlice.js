import { createSlice } from '@reduxjs/toolkit';

const credentialsInitState = {
  email: '',
  password: '',
  remembered: false,
};

const initialState = {
  credentials: credentialsInitState,
  currentUser: null,
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setCurrentUserToDefault: (state) => {
      state.currentUser = credentialsInitState;
    },
    setCredentials: (state, action) => {
      state.credentials = action.payload;
    },
  },
});

export const UserReducer = UserSlice.reducer;
