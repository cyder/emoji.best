import { pushInUrlQuery } from 'react-url-query';
import * as types from '../constants/emojis';

export function searchEmojis(keyword, order) {
  pushInUrlQuery('keyword', keyword);
  pushInUrlQuery('order', order);
  return { type: types.SEARCH, keyword, order };
}

export function successLoadEmojis(emojis) {
  return { type: types.SUCCESS_LOAD, emojis };
}
