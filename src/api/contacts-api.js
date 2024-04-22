import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://65c65c8fe5b94dfca2e16d4b.mockapi.io/contacts/contacts',
});

export const requestContacts = async () => {
	const { data } = await instance.get('/');
	return data;
};

export const requestAddContacts = async body => {
	const { data } = await instance.post('/', body);
	return data;
};

export const requestDeleteContacts = async id => {
	const { data } = await instance.delete(`/${id}`);
	return data;
};
