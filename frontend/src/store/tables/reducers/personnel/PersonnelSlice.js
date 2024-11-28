import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personnels: [],
};

export const PersonnelSlice = createSlice({
  name: 'Personnel',
  initialState,
  reducers: {
    setPersonnels: (state, action) => {
      state.personnels = action.payload;
    },
  },
});

export const PersonnelReducer = PersonnelSlice.reducer;
