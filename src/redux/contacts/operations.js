import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/operations';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await goitApi.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    await goitApi.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateContact = createAsyncThunk('contacts/updateContact', async ({ contactId, contact }, thunkAPI) => {
  try {
    const response = await goitApi.patch(`/contacts/${contactId}`, contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
