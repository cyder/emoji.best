import * as types from '../constants/emojis';

export function loadEmojis() {
  return { type: types.LOAD };
}

export function sucessLoadEmojis(emojis) {
  return { type: types.SUCCESS_LOAD, emojis };
}
