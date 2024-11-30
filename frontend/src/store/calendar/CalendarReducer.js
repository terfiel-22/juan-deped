import { combineReducers } from '@reduxjs/toolkit';
import { EnrollmentScheduleReducer } from './reducers/enrollment-schedules/EnrollmentScheduleSlice';

export const CalendarReducer = combineReducers({
  enrollmentScheduleReducer: EnrollmentScheduleReducer,
});
