import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
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
      state.auths = addItem(state.auths, action.payload);
    },
    setUpdatedAccount: (state, action) => {
      state.auths = updateItem(state.auths, action.payload);
    },
    setDeletedAccount: (state, action) => {
      state.auths = removeItem(state.auths, action.payload);
    },
  },
});

export const AccountReducer = AccountSlice.reducer;

// Selector
export const selectTableReducer = (state) => state.userReducer;
export const selectCurrentTable = createSelector([selectTableReducer], (user) => user.currentTable);
export const selectCurrentTableRole = createSelector([selectCurrentTable], (currentTable) =>
  currentTable ? currentTable.role : 'Guest',
);
export const selectCredentials = createSelector([selectTableReducer], (user) => user.credentials);
export const selectAccounts = createSelector([selectTableReducer], (user) => user.auths);
export const selectPersonnels = createSelector([selectTableReducer], (user) => user.personnels);
