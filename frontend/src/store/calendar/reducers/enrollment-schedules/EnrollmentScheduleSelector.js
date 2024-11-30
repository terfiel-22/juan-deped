import { createSelector } from 'reselect';

export const selectCalendarReducer = (state) => state.calendarReducer;
export const selectEnrollmentScheduleReducer = createSelector(
  [selectCalendarReducer],
  (calendarReducer) => calendarReducer.enrollmentReducer,
);
export const selectTracks = createSelector(
  [selectEnrollmentScheduleReducer],
  (enrollmentReducer) => enrollmentReducer.enrollmentSchedules,
);
