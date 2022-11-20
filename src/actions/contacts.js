import {
  CREATE_CONTACT,
  RETRIEVE_CONTACTS,
  RETRIEVE_MORE_CONTACTS,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  DELETE_ALL_CONTACTS
} from "./types";

import ContactDataService from "../services/contact.service";

export const createContact = (name, email, dob, address) => async (dispatch) => {
  debugger;
  try {
    const res = {
      name: {'first': name},
      email: email,
      dob: {'date': new Date(dob)},
      location: {'street': {'name':address}}
    }

    dispatch({
      type: CREATE_CONTACT,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveContacts = (page) => async (dispatch) => {
  try {
    debugger;
    const res = await ContactDataService.getAll(page);

    dispatch({
      type: RETRIEVE_CONTACTS,
      payload: res.data['results'],
    });
  } catch (err) {
    console.log(err);
  }
};


export const fetchMoreContacts = (pageNumber) => async(dispatch) => {
  try {
    debugger;
    const res = await ContactDataService.getAll(pageNumber);

    dispatch({
      type: RETRIEVE_MORE_CONTACTS,
      payload: res.data['results'],
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateContact = (id, data) => async (dispatch) => {
  try {
    const res = await ContactDataService.update(id, data);

    dispatch({
      type: UPDATE_CONTACT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteContact = (email) => async (dispatch) => {
  try {
    // await ContactDataService.delete(id);

    dispatch({
      type: DELETE_CONTACT,
      payload: { email },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllContacts = () => async (dispatch) => {
  try {
    const res = await ContactDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_CONTACTS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findContactsByTitle = (title) => async (dispatch) => {
  try {
    const res = await ContactDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_CONTACTS,
      payload: res.data['results'],
    });
  } catch (err) {
    console.log(err);
  }
};