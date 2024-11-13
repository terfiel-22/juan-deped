import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

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

// Actions
export const { setTracks, setStrands, setSpecializations } = CareerSlice.actions;

// Selector
export const selectCareerReducer = (state) => state.careerReducer;
export const selectTracks = createSelector([selectCareerReducer], (career) => career.tracks);
export const selectStrands = createSelector([selectCareerReducer], (career) => career.strands);
export const selectSpecializations = createSelector(
  [selectCareerReducer],
  (career) => career.specializations,
);
