import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, getContacts, postContacts } from './contactsOperations';
import { logout } from 'redux/auth/authOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [getContacts.fulfilled](_, action) {
      return action.payload;
    },
    [postContacts.fulfilled](_, action) {
      return action.payload;
    },
    [deleteContact.fulfilled](_, action) {
      return action.payload;
    },
    [logout.fulfilled](state, _) {
      return [];
    },
  },
});

export default contactsSlice.reducer;
