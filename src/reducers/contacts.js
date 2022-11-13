import {
  CREATE_CONTACT,
  RETRIEVE_CONTACTS,
  RETRIEVE_MORE_CONTACTS,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  DELETE_ALL_CONTACTS,
} from "../actions/types";

const initialState = [];

function contactReducer(contacts = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CONTACT:
      return [...contacts, payload];

    case RETRIEVE_CONTACTS:
      return payload;

    case RETRIEVE_MORE_CONTACTS:
        const newContacts = payload
        return [...contacts, ...newContacts]

    case UPDATE_CONTACT:
      return contacts.map((contact) => {
        if (contact.id === payload.id) {
          return {
            ...contact,
            ...payload,
          };
        } else {
          return contact;
        }
      });

    case DELETE_CONTACT:
      return contacts.filter(({ email }) => email !== payload.email);

    case DELETE_ALL_CONTACTS:
      return [];

    default:
      return contacts;
  }
};

export default contactReducer;