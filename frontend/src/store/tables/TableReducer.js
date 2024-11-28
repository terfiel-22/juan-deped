import { combineReducers } from '@reduxjs/toolkit';
import { AccountReducer } from './reducers/account/AccountSlice';
import { CareerReducer } from './reducers/career/CareerSlice';
import { PersonnelReducer } from './reducers/personnel/PersonnelSlice';

export const TableReducer = combineReducers({
  accountReducer: AccountReducer,
  careerReducer: CareerReducer,
  personnelReducer: PersonnelReducer,
});
