import { createSelector } from 'reselect';

export const selectCalendarReducer = (state) => state.calendarReducer;
export const selectEnrollmentScheduleReducer = createSelector(
  [selectCalendarReducer],
  (calendarReducer) => calendarReducer.enrollmentScheduleReducer,
);
export const selectEnrollmentSchedules = createSelector(
  [selectEnrollmentScheduleReducer],
  (enrollmentScheduleReducer) => enrollmentScheduleReducer.enrollmentSchedules,
);
