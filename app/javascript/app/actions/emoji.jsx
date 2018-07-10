import * as types from '../constants/emoji';

export function getEmoji(id) {
  return { type: types.GET, id };
}

export function successGetEmoji(emoji) {
  return { type: types.SUCCESS_GET, emoji };
}

export function deleteTag(emojiId, tagId, accessToken) {
  return {
    type: types.DELETE_TAG,
    emojiId,
    tagId,
    accessToken,
  };
}
