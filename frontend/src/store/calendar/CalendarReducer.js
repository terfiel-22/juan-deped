import { combineReducers } from '@reduxjs/toolkit';
import { EnrollmentScheduleReducer } from './reducers/enrollment-schedules/EnrollmentSchedulesSlice';

export const CalendarReducer = combineReducers({
  enrollmentScheduleReducer: EnrollmentScheduleReducer,
});
