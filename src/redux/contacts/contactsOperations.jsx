import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

export const postContacts = createAsyncThunk(
  'contacts/post',
  async credentials => {
    try {
      await axios.post('/contacts', credentials);
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {}
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {}
  }
);
