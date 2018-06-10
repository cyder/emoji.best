import * as types from './types';

export function loadEmojis() {
  return { type: types.LOAD };
}

export function sucessLoadEmojis(emojis) {
  return { type: types.SUCCESS_LOAD, emojis };
}
