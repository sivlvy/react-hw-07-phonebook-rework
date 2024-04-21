import ContactForm from './ContactForm/ContactForm';
import Container from './Container/Container';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts, getFilteredContacts } from '../redux/selectors';
import { addContact, deleteContact } from '../redux/contacts/contacts-slice';
import { setFilter } from '../redux/filter/filter-slice';

export const App = () => {
	const contacts = useSelector(getAllContacts);
	const filteredContacts = useSelector(getFilteredContacts);
	const dispatch = useDispatch();

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	const handleChange = ({ target }) => dispatch(setFilter(target.value));

	const formSubmitHandler = data => {
		const newContact = { id: nanoid(), ...data };
		const inContacts = contacts.some(
			({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
		);
		if (inContacts) {
			Notify.failure(`${newContact.name} is already in contacts`);
			return;
		}
		Notify.success(`${newContact.name} was added to contacts`);
		dispatch(addContact(newContact));
	};

	const onDeleteContact = contactId => {
		dispatch(deleteContact(contactId));
		Notify.success(`Was deleted from contacts`);
	};

	return (
		<Container>
			<div className="flex justify-between">
				<div>
					<h1 className="font-bold text-xl text-center font-mono mb-10">
						Phonebook
					</h1>
					<ContactForm onSubmit={formSubmitHandler} />
				</div>
				<div>
					<h2 className="font-bold text-center text-xl mb-10">Contacts</h2>
					<Filter onChange={handleChange} />
					<ContactsList
						contacts={filteredContacts}
						onDeleteContact={onDeleteContact}
					/>
				</div>
			</div>
		</Container>
	);
};
