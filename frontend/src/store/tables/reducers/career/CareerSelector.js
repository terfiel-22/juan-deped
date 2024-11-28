import { createSelector } from 'reselect';

export const selectTableReducer = (state) => state.tableReducer;
export const selectCareerReducer = createSelector(
  [selectTableReducer],
  (tableReducer) => tableReducer.careerReducer,
);
export const selectTracks = createSelector(
  [selectCareerReducer],
  (careerReducer) => careerReducer.tracks,
);
export const selectStrands = createSelector(
  [selectCareerReducer],
  (careerReducer) => careerReducer.strands,
);
export const selectSpecializations = createSelector(
  [selectCareerReducer],
  (careerReducer) => careerReducer.specializations,
);
