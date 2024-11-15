import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { currentStudentInitState } from './currentStudentInitState';

const initialState = {
  currentStudent: currentStudentInitState,
};

export const StudentSlice = createSlice({
  name: 'Student',
  initialState,
  reducers: {
    setCurrentStudent: (state, action) => {
      state.currentStudent = action.payload;
    },
  },
});

export const StudentReducer = StudentSlice.reducer;

// Actions
export const { setCurrentStudent } = StudentSlice.actions;

// Selector
export const selectStudentReducer = (state) => state.studentReducer;
export const selectCurrentStudent = createSelector(
  [selectStudentReducer],
  (student) => student.currentStudent,
);
