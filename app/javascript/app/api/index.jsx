import * as emoji from './emoji';
import * as tag from './tag';

const COMMON_URL = '/api/v1/';
const DOWNLOAD = 'download';
const AUTH = 'users/authentication';
const SIGNIN = 'users/sign_in';
const SIGNUP = 'users';
const SIGNOUT = 'users/sign_out';

const csrfToken = document.querySelector('meta[name=csrf-token]').content;

export default {
  ...emoji,
  ...tag,
};

function get(path, data = null, accessToken = null) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: accessToken || '',
  };
  const params = data !== null ? new URLSearchParams(data) : null;
  const uri = params !== null ? `${path}?${params.toString()}` : path;

  return fetch(uri, { headers })
    .then((response) => {
      if (!response.ok) {
        throw response.status;
      }
      return response;
    })
    .then(response => response.json());
}

function post(path, data = null, accessToken = null) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken,
    Authorization: accessToken || '',
  };
  const body = JSON.stringify(data);
  const params = {
    method: 'POST',
    credentials: 'same-origin',
    headers,
    body,
  };

  return fetch(path, { ...params })
    .then((response) => {
      if (!response.ok) {
        throw response.status;
      }
      return response;
    })
    .then(response => response.json());
}

function deleteFetch(path, accessToken = null) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken,
    Authorization: accessToken || '',
  };
  const params = {
    method: 'DELETE',
    credentials: 'same-origin',
    headers,
  };

  return fetch(path, { ...params }).then(response => response.json());
}

export function downloadEmojisLink(emojis) {
  const params = new URLSearchParams();
  emojis.forEach(emoji => params.append('emojis[]', emoji.id));
  return `${COMMON_URL}${DOWNLOAD}?${params.toString()}`;
}

export function authentication(accessToken) {
  const path = `${COMMON_URL}${AUTH}`;
  return get(path, null, accessToken);
}

export function signIn(email, password) {
  const path = `${COMMON_URL}${SIGNIN}`;
  const data = {
    user: { email, password },
  };
  return post(path, data);
}

export function signUp(name, email, password, passwordConfirm) {
  const path = `${COMMON_URL}${SIGNUP}`;
  const data = {
    user: {
      name,
      email,
      password,
      password_confirmation: passwordConfirm,
    },
  };
  return post(path, data);
}

export function signOut(accessToken) {
  const path = `${COMMON_URL}${SIGNOUT}`;
  return deleteFetch(path, accessToken);
}
