const COMMON_URL = '/api/v1/';
const SEARCH = 'search';
const EMOJI = 'emojis';
const DOWNLOAD = 'download';
const AUTH = 'users/authentication';
const SIGNIN = 'users/sign_in';
const SIGNUP = 'users';
const SIGNOUT = 'users/sign_out';
const EMOJIS = 'emojis';
const EMOJIS_UPLOAD = 'emojis/upload';
const TAGS = 'tags';

const csrfToken = document.querySelector('meta[name=csrf-token]').content;

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

function patch(path, data = null, accessToken = null) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken,
    Authorization: accessToken || '',
  };
  const body = JSON.stringify(data);
  const params = {
    method: 'PATCH',
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

function postData(path, data, accessToken = null) {
  const headers = {
    Accept: 'application/json',
    'X-CSRF-Token': csrfToken,
    Authorization: accessToken || '',
  };

  const body = new FormData();
  Object.keys(data).forEach(key => (
    body.append(key, data[key])
  ));

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

export function searchEmojis(order, keyword, page = 0, target = null, accessToken = null) {
  const data = { page };
  if (order != null) data.order = order;
  if (keyword != null) data.keyword = keyword;
  if (target != null) data.target = target;

  const path = `${COMMON_URL}${SEARCH}`;

  return get(path, data, accessToken);
}

export function getEmoji(id) {
  const path = `${COMMON_URL}${EMOJI}/${id}`;

  return get(path);
}

export function editEmoji(id, name, description, accessToken) {
  const path = `${COMMON_URL}${EMOJI}/${id}`;
  const data = {
    emoji: { name, description },
  };

  return patch(path, data, accessToken);
}

export function deleteEmoji(id, accessToken) {
  const path = `${COMMON_URL}${EMOJI}/${id}`;

  return deleteFetch(path, accessToken);
}

export function createTag(emojiId, name, accessToken) {
  const path = `${COMMON_URL}${EMOJI}/${emojiId}/${TAGS}`;
  const data = {
    tag: { name },
  };
  return post(path, data, accessToken);
}

export function deleteTag(emojiId, tagId, accessToken) {
  const path = `${COMMON_URL}${EMOJI}/${emojiId}/${TAGS}/${tagId}`;
  return deleteFetch(path, accessToken);
}

export function downloadEmojisLink(emojis) {
  const params = new URLSearchParams();
  emojis.forEach(emoji => params.append('emojis[]', emoji.id));
  return `${COMMON_URL}${DOWNLOAD}?${params.toString()}`;
}

export function uploadEmoji(image, accessToken) {
  const path = `${COMMON_URL}${EMOJIS_UPLOAD}`;
  const data = { image };
  return postData(path, data, accessToken);
}

export function saveEmoji(name, description, image, accessToken) {
  const path = `${COMMON_URL}${EMOJIS}`;
  const data = {
    emoji: {
      name,
      description,
      image,
    },
  };
  return post(path, data, accessToken);
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
