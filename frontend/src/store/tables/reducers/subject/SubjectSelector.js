import { createSelector } from 'reselect';

export const selectTableReducer = (state) => state.tableReducer;
export const selectSubjectReducer = createSelector(
  [selectTableReducer],
  (tableReducer) => tableReducer.subjectReducer,
);
export const selectCoreSubjects = createSelector(
  [selectSubjectReducer],
  (subjectReducer) => subjectReducer.coreSubjects,
);
export const selectAppliedSubjects = createSelector(
  [selectSubjectReducer],
  (subjectReducer) => subjectReducer.appliedSubjects,
);
export const selectSpecializedSubjects = createSelector(
  [selectSubjectReducer],
  (subjectReducer) => subjectReducer.specializedSubjects,
);
