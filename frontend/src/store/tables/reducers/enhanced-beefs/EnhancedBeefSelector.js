import { createSelector } from 'reselect';

export const selectTableReducer = (state) => state.tableReducer;
export const selectEnhancedBeefReducer = createSelector(
  [selectTableReducer],
  (tableReducer) => tableReducer.enhancedBeefReducer,
);
export const selectEnhancedBeefs = createSelector(
  [selectEnhancedBeefReducer],
  (enhancedBeefReducer) => enhancedBeefReducer.enhancedBeefs,
);
