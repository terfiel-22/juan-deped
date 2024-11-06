import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = UserSlice.actions;
export const selectCartReducer = (state) => state.useruserReducer;

export const UserReducer = UserSlice.reducer;
