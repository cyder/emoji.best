import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { UPLOAD, SAVE } from '../constants/upload-emoji';
import { successUploadEmoji, successSaveEmoji } from '../actions/upload-emoji';
import { uploadEmoji } from '../api';

function* sageUploadEmoji(action) {
  const json = yield uploadEmoji(action.image, action.accessToken);
  yield put(successUploadEmoji(action.emoji.id, json.url));
}

export default function* uploadEmojiSaga() {
  yield takeEvery(UPLOAD, sageUploadEmoji);
}
