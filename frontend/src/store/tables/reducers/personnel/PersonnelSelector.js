import { createSelector } from 'reselect';

export const selectTableReducer = (state) => state.tableReducer;
export const selectPersonnelReducer = createSelector(
  [selectTableReducer],
  (tableReducer) => tableReducer.personnelReducer,
);
export const selectPersonnels = createSelector(
  [selectPersonnelReducer],
  (personnelReducer) => personnelReducer.personnels,
);
