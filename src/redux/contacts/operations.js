import Notiflix from "notiflix";

import {
  fetchPostContacts,
  fetchGetContacts,
  fetchDeleteContacts,
} from "../../share/api";
import {
  getContacts,
  removeContacts,
  postContact,
} from "./contacts-slice";

const isDuplicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();

  const result = contacts.find((item) => {
    return normalizedName === item.name.toLowerCase();
  });

  return Boolean(result);
};

export const postContactsOperations = (data) => {
  return async (dispatch, getState) => {
    const { contacts } = getState();
    if (isDuplicate(data, contacts.items)) {
      return Notiflix.Notify.warning(`${data.name} is already exists`);
    }
    try {
      const contact = await fetchPostContacts(data);
      dispatch(postContact(contact.data));
    } catch (error) {
      console.log(error.message)
    }
  };
};

export const getContactsOperations = () => {
  return async (dispatch) => {
    try {
      const { data } = await fetchGetContacts();
      dispatch(getContacts(data));
    } catch (error) {
      console.log(error.message)
    }
  };
};

export const removeContactsOperation = (id) => {
  return async (dispatch) => {
    try {
      await fetchDeleteContacts(id);
      dispatch(removeContacts(id));
    } catch (error) {
      console.log(error.message)
    }
  };
};
