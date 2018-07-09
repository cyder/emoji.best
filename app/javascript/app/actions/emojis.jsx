import { pushUrlQuery } from 'react-url-query';
import * as types from '../constants/emojis';

export function pushUrl(keyword, order) {
  pushUrlQuery({ keyword, order });
  return { type: types.PUSH_URL };
}

export function searchEmojis(keyword, order, target = 'all') {
  return {
    type: types.SEARCH,
    keyword,
    order,
    target,
  };
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
