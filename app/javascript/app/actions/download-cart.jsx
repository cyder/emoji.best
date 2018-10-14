import * as types from '../constants/download-cart';

export function addEmojiToDownloadCart(emoji) {
  return { type: types.ADD, emoji };
}

export function deleteEmojiFromDownloadCart(emoji) {
  return { type: types.DELETE, emoji };
}

export function downloadEmojis(emojis, accessToken) {
  return { type: types.DOWNLOAD, emojis, accessToken };
}
