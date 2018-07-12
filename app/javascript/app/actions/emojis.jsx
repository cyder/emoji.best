import { pushUrlQuery } from 'react-url-query';
import * as types from '../constants/emojis';

export function pushUrl(keyword, order, target = null) {
  pushUrlQuery({ keyword, order, target });
  return { type: types.PUSH_URL };
}

export function searchEmojis(keyword, order, target = null) {
  return {
    type: types.SEARCH,
    keyword,
    order,
    target,
  };
}

export function loadNextEmojis(page, keyword, order, target = null) {
  return {
    type: types.LOAD_NEXT,
    keyword,
    order,
    page,
    target,
  };
}

export function successLoadEmojis(emojis) {
  const status = emojis.length > 0 ? types.STATUS.SHOWING : types.STATUS.END;
  return { type: types.SUCCESS_LOAD, emojis, status };
}
