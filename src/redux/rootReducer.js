import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const persistConfig = {
	key: 'contacts',
	storage,
	whitelist: ['contacts'],
};

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
