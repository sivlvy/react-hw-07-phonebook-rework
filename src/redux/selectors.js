export const getAllContacts = state => state.contacts;

export const getFilteredContacts = state => {
	const { contacts, filter } = state;
	return contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);
};
