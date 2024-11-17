import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { currentStudentInitState } from './studentSliceInitStates';

const initialState = {
  currentStudent: currentStudentInitState,
};

export const StudentSlice = createSlice({
  name: 'Student',
  initialState,
  reducers: {
    setCurrentStudentEmail: (state, action) => {
      state.currentStudent.email = action.payload;
    },
    setCurrentStudentLRN: (state, action) => {
      state.currentStudent.learnerReferenceNo = action.payload;
    },
    setCurrentStudent: (state, action) => {
      state.currentStudent = action.payload;
    },
  },
});

export const StudentReducer = StudentSlice.reducer;

// Actions
export const { setCurrentStudent, setCurrentStudentEmail, setCurrentStudentLRN } =
  StudentSlice.actions;

// Selector
export const selectStudentReducer = (state) => state.studentReducer;
export const selectCurrentStudent = createSelector(
  [selectStudentReducer],
  (student) => student.currentStudent,
);
export const selectIsFromSubmitted = createSelector(
  [selectCurrentStudent],
  (currentStudent) => !!currentStudent.createdAt,
);
