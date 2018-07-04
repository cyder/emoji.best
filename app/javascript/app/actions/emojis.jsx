import * as types from '../constants/emojis';

export function searchEmojis(keyword, order) {
  return { type: types.SEARCH, keyword, order };
}

export function loadNextEmojis(page, keyword, order) {
  return {
    type: types.LOAD_NEXT,
    keyword,
    order,
    page,
  };
}

export function successLoadEmojis(emojis) {
  const status = emojis.length > 0 ? types.STATUS.SHOWING : types.STATUS.END;
  return { type: types.SUCCESS_LOAD, emojis, status };
}
