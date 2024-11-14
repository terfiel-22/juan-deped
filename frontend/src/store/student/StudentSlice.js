import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  currentStudent: {
    email: '',
    mobile: '',
    schoolYear: '',
    gradeLevelToEnroll: '11',
    withLRN: true,
    isReturnee: false,

    isPsaAvailable: true,
    psaBirthCertificateNo: '',
    learnerReferenceNo: '',
    lastName: '',
    firstName: '',
    middleName: '',
    extensionName: '',
    birthDate: '',
    sex: '',
    age: '',
    placeOfBirth: '',
    motherTongue: '',
    isIndigenousPeople: false,
    indigenousPeople: '',
    isFourPsBeneficiary: false,
    fourPsHouseHoldId: '',
  },
};

export const StudentSlice = createSlice({
  name: 'Student',
  initialState,
  reducers: {
    setCurrentStudent: (state, action) => {
      state.currentStudent = action.payload;
    },
  },
});

export const StudentReducer = StudentSlice.reducer;

// Actions
export const { setCurrentStudent } = StudentSlice.actions;

// Selector
export const selectStudentReducer = (state) => state.studentReducer;
export const selectCurrentStudent = createSelector(
  [selectStudentReducer],
  (student) => student.currentStudent,
);
