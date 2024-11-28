import { combineReducers } from '@reduxjs/toolkit';
import { AccountReducer } from './reducers/account/AccountSlice';

export const TableReducer = combineReducers({
  accountReducer: AccountReducer,
});
