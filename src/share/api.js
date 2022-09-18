import { instance } from './user';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('contacts', data);
  return result;
};

export const removeContacts = async id => {
  const { data: result } = await instance.delete(`contacts/${id}`);
  return result;
};
