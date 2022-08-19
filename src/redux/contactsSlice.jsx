import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, deleteContact, setFilter } = contactsSlice.actions;

// Selectors
export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
