import * as contactsApi from '../../api/contacts-api';

import { Notify } from 'notiflix';

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
	},
	{
		condition: ({ name }, { getState }) => {
			const { contacts } = getState();
			const normalizedName = name.toLowerCase();

			const duplicate = contacts.items.find(contact => {
				const normalizedCurrentName = contact.name.toLowerCase();
				return normalizedCurrentName === normalizedName;
			});

			if (duplicate) {
				Notify.failure(`${name} already exists`);
				return false;
			}
			Notify.success(`${name} has been added to the list!`);
		},
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, { rejectWithValue }) => {
		try {
			await contactsApi.requestDeleteContacts(id);

			Notify.info(`Was deleted from contacts`);

			return id;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
