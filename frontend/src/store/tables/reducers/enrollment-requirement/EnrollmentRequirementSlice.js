import { createSlice } from '@reduxjs/toolkit';
import { addItem, removeItem, updateItem } from '../../../DispatchHelper';

const initialState = {
  enrollmentRequirements: [],
};

export const EnrollmentRequirementSlice = createSlice({
  name: 'Enrollment Requirement',
  initialState,
  reducers: {
    setEnrollmentRequirements: (state, action) => {
      state.enrollmentRequirements = action.payload;
    },
    setNewEnrollmentRequirement: (state, action) => {
      state.enrollmentRequirements = addItem(state.enrollmentRequirements, action.payload);
    },
    setUpdatedEnrollmentRequirement: (state, action) => {
      state.enrollmentRequirements = updateItem(state.enrollmentRequirements, action.payload);
    },
    setDeletedEnrollmentRequirement: (state, action) => {
      state.enrollmentRequirements = removeItem(state.enrollmentRequirements, action.payload);
    },
  },
});

export const EnrollmentRequirementReducer = EnrollmentRequirementSlice.reducer;
