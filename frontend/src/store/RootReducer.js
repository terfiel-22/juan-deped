import { combineReducers } from '@reduxjs/toolkit';
import CustomizerReducer from './customizer/CustomizerSlice';
import { UserReducer } from './user/UserSlice';
import { CareerReducer } from './career/CareerSlice';
import { StudentReducer } from './student/StudentSlice';

export const rootReducer = combineReducers({
  customizer: CustomizerReducer,
  /** JuanDepEd */
  userReducer: UserReducer,
  studentReducer: StudentReducer,
  careerReducer: CareerReducer,
});
