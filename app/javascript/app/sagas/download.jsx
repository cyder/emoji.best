import 'babel-polyfill';
import { takeEvery } from 'redux-saga/effects';

import { DOWNLOAD as DOWNLOAD_EMOJI } from '../constants/emoji';
import { DOWNLOAD as DOWNLOAD_EMOJIS } from '../constants/download-cart';
import api from '../api';

function downloadBlob(blob, name) {
  const a = document.createElement('a');
  a.href = window.URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function* sageDownloadEmoji(action) {
  const blob = yield api.downloadEmoji(action.emoji.id, action.accessToken);
  downloadBlob(blob, action.emoji.name);
}

function* sageDownloadEmojis(action) {
  const blob = yield api.downloadEmojis(action.emojis, action.accessToken);
  downloadBlob(blob, 'emojis');
}

export default function* emojiSaga() {
  yield takeEvery(DOWNLOAD_EMOJI, sageDownloadEmoji);
  yield takeEvery(DOWNLOAD_EMOJIS, sageDownloadEmojis);
}
