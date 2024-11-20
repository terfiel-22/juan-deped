import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { credentialsInitState } from './UserSliceInitStates';
import { addAuth, updateAuth } from './UserSliceService';

const initialState = {
  credentials: credentialsInitState,
  currentUser: null,
  auths: [],
  personnels: [],
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
    setAuths: (state, action) => {
      state.auths = action.payload;
    },
    setNewAuth: (state, action) => {
      state.auths = addAuth(state.auths, action.payload);
    },
    setUpdatedAuth: (state, action) => {
      state.auths = updateAuth(state.auths, action.payload);
    },
    setPersonnels: (state, action) => {
      state.personnels = action.payload;
    },
  },
});

export const UserReducer = UserSlice.reducer;

// Actions
export const {
  setCurrentUser,
  setCredentials,
  setAuths,
  setNewAuth,
  setUpdatedAuth,
  setPersonnels,
} = UserSlice.actions;

// Selector
export const selectUserReducer = (state) => state.userReducer;
export const selectCurrentUser = createSelector([selectUserReducer], (user) => user.currentUser);
export const selectCurrentUserRole = createSelector([selectCurrentUser], (currentUser) =>
  currentUser ? currentUser.role : 'Guest',
);
export const selectCredentials = createSelector([selectUserReducer], (user) => user.credentials);
export const selectAuths = createSelector([selectUserReducer], (user) => user.auths);
export const selectPersonnels = createSelector([selectUserReducer], (user) => user.personnels);
