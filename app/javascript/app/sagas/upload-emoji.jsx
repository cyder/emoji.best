import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { UPLOAD, SAVE } from '../constants/upload-emoji';
import { successUploadEmoji, successSaveEmoji } from '../actions/upload-emoji';
import { uploadEmoji, saveEmoji } from '../api';

function* sageUploadEmoji(action) {
  const json = yield uploadEmoji(action.image, action.accessToken);
  yield put(successUploadEmoji(action.emoji.id, json.url));
}

function* sageSaveEmoji(action) {
  const { name, description, image } = action.emoji;
  const json = yield saveEmoji(name, description, image, action.accessToken);
  yield put(successSaveEmoji(action.emoji.id, json.emoji));
}

export default function* uploadEmojiSaga() {
  yield takeEvery(UPLOAD, sageUploadEmoji);
  yield takeEvery(SAVE, sageSaveEmoji);
}
