import * as types from '../constants/download-cart';

export function addEmojiToDownloadCart(emoji) {
  return { type: types.ADD, emoji };
}

export function deleteEmojiToDownloadCart(emoji) {
  return { type: types.DELETE, emoji };
}
