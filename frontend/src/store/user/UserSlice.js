import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

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
    setCredentials: (state, action) => {
      state.credentials = action.payload;
    },
  },
});

export const UserReducer = UserSlice.reducer;

// Actions
export const { setCurrentUser, setCredentials } = UserSlice.actions;

// Selector
export const selectUserReducer = (state) => state.userReducer;
export const selectCurrentUser = createSelector([selectUserReducer], (user) => user.currentUser);
export const selectCurrentUserRole = createSelector([selectCurrentUser], (currentUser) =>
  currentUser ? currentUser.role : 'Guest',
);
export const selectCredentials = createSelector([selectUserReducer], (user) => user.credentials);
