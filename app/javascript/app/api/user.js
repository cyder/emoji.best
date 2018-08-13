import { getRequest, postRequest, deleteRequest } from './base';
import {
  COMMON_URL,
  AUTH,
  SIGNIN,
  SIGNUP,
  SIGNOUT,
} from './constants';

export const authentication = (accessToken) => {
  const path = `${COMMON_URL}${AUTH}`;
  return getRequest(path, { accessToken });
};

export const signIn = (email, password) => {
  const path = `${COMMON_URL}${SIGNIN}`;
  const data = {
    user: { email, password },
  };
  return postRequest(path, { data });
};

export const signUp = (name, email, password, passwordConfirm) => {
  const path = `${COMMON_URL}${SIGNUP}`;
  const data = {
    user: {
      name,
      email,
      password,
      password_confirmation: passwordConfirm,
    },
  };
  return postRequest(path, { data });
};

export const signOut = (accessToken) => {
  const path = `${COMMON_URL}${SIGNOUT}`;
  return deleteRequest(path, { accessToken });
};
