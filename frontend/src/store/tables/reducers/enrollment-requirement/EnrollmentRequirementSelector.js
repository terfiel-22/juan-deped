import { createSelector } from 'reselect';

export const selectTableReducer = (state) => state.tableReducer;

export const selectEnrollmentRequirementReducer = createSelector(
  [selectTableReducer],
  (tableReducer) => tableReducer.enrollmentRequirementReducer,
);

export const selectEnrollmentRequirements = createSelector(
  [selectEnrollmentRequirementReducer],
  (enrollmentRequirementReducer) => enrollmentRequirementReducer.enrollmentRequirements,
);
