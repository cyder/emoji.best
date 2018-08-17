import 'babel-polyfill';
import { takeEvery } from 'redux-saga/effects';

import { DOWNLOAD as DOWNLOAD_EMOJI } from '../constants/emoji';
import api from '../api';

function downloadBlob(blob, name) {
  const a = document.createElement('a');
  a.href = window.URL.createObjectURL(blob);
  a.download = name;
  a.click();
}

function* sageDownloadEmoji(action) {
  const blob = yield api.downloadEmoji(action.emoji.id, action.accessToken);
  downloadBlob(blob, action.emoji.name);
}

export default function* emojiSaga() {
  yield takeEvery(DOWNLOAD_EMOJI, sageDownloadEmoji);
}
