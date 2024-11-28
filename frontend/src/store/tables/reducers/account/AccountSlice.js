import { createSlice } from '@reduxjs/toolkit';
import { addItem, removeItem, updateItem } from '../../../DispatchHelper';

const initialState = {
  accounts: [],
};

export const AccountSlice = createSlice({
  name: 'Account',
  initialState,
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload;
    },
    setNewAccount: (state, action) => {
      state.accounts = addItem(state.accounts, action.payload);
    },
    setUpdatedAccount: (state, action) => {
      state.accounts = updateItem(state.accounts, action.payload);
    },
    setDeletedAccount: (state, action) => {
      state.accounts = removeItem(state.accounts, action.payload);
    },
  },
});

export const AccountReducer = AccountSlice.reducer;
