import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { UPLOAD, SAVE } from '../constants/upload-emoji';
import { successUploadEmoji, successSaveEmoji, failedUploadEmoji, failedSaveEmoji } from '../actions/upload-emoji';
import api from '../api';

function* sageUploadEmoji(action) {
  try {
    const json = yield api.uploadEmoji(action.image, action.accessToken);
    yield put(successUploadEmoji(action.emoji.id, json.url));
  } catch (status) {
    yield put(failedUploadEmoji(action.emoji.id, 'upload error'));
  }
}

function* sageSaveEmoji(action) {
  try {
    const { name, description, image } = action.emoji;
    yield api.saveEmoji(name, description, image, action.accessToken);
    yield put(successSaveEmoji(action.emoji.id));
  } catch (status) {
    yield put(failedSaveEmoji(action.emoji.id, 'server error'));
  }
}

export default function* uploadEmojiSaga() {
  yield takeEvery(UPLOAD, sageUploadEmoji);
  yield takeEvery(SAVE, sageSaveEmoji);
}
