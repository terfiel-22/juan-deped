import { combineReducers } from '@reduxjs/toolkit';
import CustomizerReducer from './customizer/CustomizerSlice';
import { UserReducer } from './user/UserSlice';
import { TableReducer } from './tables/TableReducer';

export const rootReducer = combineReducers({
  customizer: CustomizerReducer,
  /** JuanDepEd */
  userReducer: UserReducer,
  tableReducer: TableReducer,
});
