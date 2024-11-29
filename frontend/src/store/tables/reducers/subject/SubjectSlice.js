import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coreSubjects: [],
  appliedSubjects: [],
  specializedSubjects: [],
};

export const SubjectSlice = createSlice({
  name: 'Subject',
  initialState,
  reducers: {
    setCoreSubjects: (state, action) => {
      state.coreSubjects = action.payload;
    },
    setAppliedSubjects: (state, action) => {
      state.appliedSubjects = action.payload;
    },
    setSpecializedSubjects: (state, action) => {
      state.specializedSubjects = action.payload;
    },
  },
});

export const SubjectReducer = SubjectSlice.reducer;
