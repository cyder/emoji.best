import { postRequest, deleteRequest } from './base';
import { COMMON_URL, EMOJI, TAGS } from './constans';

export const createTag = (emojiId, name, accessToken) => {
  const path = `${COMMON_URL}${EMOJI}/${emojiId}/${TAGS}`;
  const data = {
    tag: { name },
  };
  return postRequest(path, { data, accessToken });
};

export const deleteTag = (emojiId, tagId, accessToken) => {
  const path = `${COMMON_URL}${EMOJI}/${emojiId}/${TAGS}/${tagId}`;
  return deleteRequest(path, { accessToken });
};
