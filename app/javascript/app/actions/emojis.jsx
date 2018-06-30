import * as types from '../constants/emojis';

export function loadEmojis() {
  return { type: types.LOAD, keyword: null, order: 'new' };
}

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
  return { type: types.SUCCESS_LOAD, emojis };
}
