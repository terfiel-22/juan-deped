import { createSlice } from '@reduxjs/toolkit';
import { addItem, removeItem, updateItem } from '../../../DispatchHelper';

const initialState = {
  enrollmentSchedules: [],
};

export const EnrollmentScheduleSlice = createSlice({
  name: 'Enrollment Schedule',
  initialState,
  reducers: {
    setEnrollmentSchedules: (state, action) => {
      state.enrollmentSchedules = action.payload;
    },
    setNewEnrollmentSchedule: (state, action) => {
      state.enrollmentSchedules = addItem(state.enrollmentSchedules, action.payload);
    },
    setUpdatedEnrollmentSchedule: (state, action) => {
      state.enrollmentSchedules = updateItem(state.enrollmentSchedules, action.payload);
    },
    setDeletedEnrollmentSchedule: (state, action) => {
      state.enrollmentSchedules = removeItem(state.enrollmentSchedules, action.payload);
    },
  },
});

export const EnrollmentScheduleReducer = EnrollmentScheduleSlice.reducer;
