import {
  getRequest,
  patchRequest,
  deleteRequest,
  postRequest,
} from './base';

import {
  COMMON_URL,
  DOWNLOAD,
  SEARCH,
  EMOJI,
  EMOJIS_UPLOAD,
} from './constants';

export const searchEmojis = (order, keyword, page = 0, target = null, accessToken = null) => {
  const data = { page };
  if (order != null) data.order = order;
  if (keyword != null) data.keyword = keyword;
  if (target != null) data.target = target;

  const path = `${COMMON_URL}${SEARCH}`;

  return getRequest(path, { data, accessToken });
};

export const getEmoji = (id) => {
  const path = `${COMMON_URL}${EMOJI}/${id}`;

  return getRequest(path);
};

export const editEmoji = (id, name, description, accessToken) => {
  const path = `${COMMON_URL}${EMOJI}/${id}`;
  const data = {
    emoji: { name, description },
  };

  return patchRequest(path, { data, accessToken });
};

export const deleteEmoji = (id, accessToken) => {
  const path = `${COMMON_URL}${EMOJI}/${id}`;

  return deleteRequest(path, { accessToken });
};

export const uploadEmoji = (image, accessToken) => {
  const path = `${COMMON_URL}${EMOJIS_UPLOAD}`;
  const data = { image };
  return postRequest(path, { data, accessToken, isFile: true });
};


export const saveEmoji = (name, description, image, accessToken) => {
  const path = `${COMMON_URL}${EMOJI}`;
  const data = {
    emoji: {
      name,
      description,
      image,
    },
  };
  return postRequest(path, { data, accessToken });
};

export const downloadEmoji = (id, accessToken) => {
  const path = `${COMMON_URL}${EMOJI}/${id}/${DOWNLOAD}`;
  return getRequest(path, { accessToken, responseAs: 'blob' });
};
