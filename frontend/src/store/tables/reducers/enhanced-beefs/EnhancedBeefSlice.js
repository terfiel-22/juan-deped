import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const EnhancedBeefReducer = EnhancedBeefSlice.reducer;
