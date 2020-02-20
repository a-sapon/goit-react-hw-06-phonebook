import { createAction } from '@reduxjs/toolkit';
import Type from './types';

export const addContact = createAction(Type.ADD_CONTACT);
export const deleteContact = createAction(Type.DELETE_CONTACT);
export const filterContacts = createAction(Type.FILTER_CONTACTS);
export const clearFilterVal = createAction(Type.CLEAR_FILTER);

// ------------- Old version without toolkit -----------------
// export const addContact = contact => ({
//   type: Type.ADD_CONTACT,
//   payload: contact
// });

// export const deleteContact = id => ({
//   type: Type.DELETE_CONTACT,
//   payload: id
// });

// export const filterContacts = filterVal => ({
//   type: Type.FILTER_CONTACTS,
//   payload: filterVal
// });

// export const clearFilterVal = () => ({
//   type: Type.CLEAR_FILTER
// });