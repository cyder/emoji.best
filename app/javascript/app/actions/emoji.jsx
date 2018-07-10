import * as types from '../constants/emoji';

export function getEmoji(id) {
  return { type: types.GET, id };
}

export function successGetEmoji(emoji) {
  return { type: types.SUCCESS_GET, emoji };
}

export function addTag(emojiId, name, accessToken) {
  return {
    type: types.ADD_TAG,
    emojiId,
    name,
    accessToken,
  };
}

export function deleteTag(emojiId, tagId, accessToken) {
  return {
    type: types.DELETE_TAG,
    emojiId,
    tagId,
    accessToken,
  };
}

export function successAddTag(tag) {
  return {
    type: types.SUCCESS_ADD_TAG,
    tag,
  };
}
