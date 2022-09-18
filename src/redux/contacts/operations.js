import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../share/api'

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const addContact = createAsyncThunk(
  "contacts/add",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContacts(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
export const removeContacts = createAsyncThunk(
  "contact/remove",
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
