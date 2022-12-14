import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContacts } from "./operations";

const initialState = {
  items: [],
  loading: false,
  isLoading: false,
  error: null,
};

export const getContactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [fetchContacts.pending]: (store) => {
      store.loading = true;
      store.error = null;
      store.isLoading = true
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
      store.isLoading = false
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.isLoading = false
    },
    [addContact.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeContacts.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [removeContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload)
    },
    [removeContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default getContactsSlice.reducer;
