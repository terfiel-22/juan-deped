import { combineReducers } from '@reduxjs/toolkit';
import { AccountReducer } from './reducers/account/AccountSlice';
import { CareerReducer } from './reducers/career/CareerSlice';
import { PersonnelReducer } from './reducers/personnel/PersonnelSlice';
import { SubjectReducer } from './reducers/subject/SubjectSlice';
import { EnhancedBeefReducer } from './reducers/enhanced-beefs/EnhancedBeefSlice';
import { EnrollmentRequirementReducer } from './reducers/enrollment-requirement/EnrollmentRequirementSlice';

export const TableReducer = combineReducers({
  accountReducer: AccountReducer,
  personnelReducer: PersonnelReducer,
  careerReducer: CareerReducer,
  subjectReducer: SubjectReducer,
  enhancedBeefReducer: EnhancedBeefReducer,
  enrollmentRequirementReducer: EnrollmentRequirementReducer,
});
