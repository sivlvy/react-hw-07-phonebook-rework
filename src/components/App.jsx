import ContactForm from './ContactForm/ContactForm';
import Container from './Container/Container';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import Loader from './Loader/Loader';
import Error from './Error/Error';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from '../redux/contacts/contacts-operations';
import { selectAllContacts, selectFilteredContacts } from '../redux/selectors';
import {
	addContact,
	deleteContact,
} from '../redux/contacts/contacts-operations';
import { setFilter } from '../redux/filter/filter-slice';

export const App = () => {
	const { isLoading, error } = useSelector(selectAllContacts);
	const items = useSelector(selectFilteredContacts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const handleChange = ({ target }) => dispatch(setFilter(target.value));

	const onAddContact = data => {
		dispatch(addContact(data));
	};

	const onDeleteContact = contactId => {
		dispatch(deleteContact(contactId));
	};

	return (
		<Container>
			<div className="flex justify-between">
				<div className="">
					<div className="w-470">
						<h1 className="font-bold text-xl text-center font-mono mb-10">
							Phonebook
						</h1>
					</div>
					<ContactForm onSubmit={onAddContact} />
				</div>
				<div>
					<h2 className="font-bold text-center text-xl mb-10">Contacts</h2>
					<Filter name="filter" onChange={handleChange} />

					{isLoading ? (
						<Loader />
					) : error ? (
						<div message={error}></div>
					) : items?.length > 0 ? (
						<ContactsList contacts={items} onDeleteContact={onDeleteContact} />
					) : (
						<Error />
					)}
				</div>
			</div>
		</Container>
	);
};
