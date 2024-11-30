import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const EnrollmentScheduleReducer = EnrollmentScheduleSlice.reducer;
