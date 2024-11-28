import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tracks: [],
  strands: [],
  specializations: [],
};

export const CareerSlice = createSlice({
  name: 'Career',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setStrands: (state, action) => {
      state.strands = action.payload;
    },
    setSpecializations: (state, action) => {
      state.specializations = action.payload;
    },
  },
});

export const CareerReducer = CareerSlice.reducer;
