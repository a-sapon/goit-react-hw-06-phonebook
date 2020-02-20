import Type from './types';

export const addContact = contact => ({
  type: Type.ADD_CONTACT,
  payload: contact
});

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: id
});

export const filterContacts = filterVal => ({
  type: Type.FILTER_CONTACTS,
  payload: filterVal
});

export const clearFilterVal = () => ({
  type: Type.CLEAR_FILTER
});