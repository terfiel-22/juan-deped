import { createSelector } from 'reselect';

export const selectTableReducer = (state) => state.tableReducer;
export const selectAccountReducer = createSelector(
  [selectTableReducer],
  (tableReducer) => tableReducer.accountReducer,
);
export const selectAccounts = createSelector(
  [selectAccountReducer],
  (accountReducer) => accountReducer.accounts,
);
