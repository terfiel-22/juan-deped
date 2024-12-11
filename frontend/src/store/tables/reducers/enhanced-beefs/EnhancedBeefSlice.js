import { createSlice } from '@reduxjs/toolkit';
import { updateItem } from '../../../DispatchHelper';

const initialState = {
  enhancedBeefs: [],
};

export const EnhancedBeefSlice = createSlice({
  name: 'EnhancedBeef',
  initialState,
  reducers: {
    setEnhancedBeefs: (state, action) => {
      state.enhancedBeefs = action.payload;
    },
    setUpdatedEnhancedBeef: (state, action) => {
      state.enhancedBeefs = updateItem(state.enhancedBeefs, action.payload);
    },
  },
});

export const EnhancedBeefReducer = EnhancedBeefSlice.reducer;
