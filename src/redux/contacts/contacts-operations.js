import * as contactsApi from '../../api/contacts-api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
	'contacts/fetchContacts',
	async (_, { rejectWithValue }) => {
		try {
			const data = await contactsApi.requestContacts();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (body, { rejectWithValue }) => {
		try {
			const data = await contactsApi.requestAddContacts(body);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, { rejectWithValue }) => {
		try {
			const data = await contactsApi.requestDeleteContacts(id);
			return id;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);