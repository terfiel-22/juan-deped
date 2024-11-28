import { combineReducers } from '@reduxjs/toolkit';
import { AccountReducer } from './reducers/account/AccountSlice';
import { CareerReducer } from './reducers/career/CareerSlice';

export const TableReducer = combineReducers({
  accountReducer: AccountReducer,
  careerReducer: CareerReducer,
});
