import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { GET, DELETE_TAG } from '../constants/emoji';
import { successGetEmoji } from '../actions/emoji';
import { getEmoji, deleteTag } from '../api';

function* sageGetEmoji(action) {
  const json = yield getEmoji(action.id);
  yield put(successGetEmoji(json.emoji));
}

function* sageDeleteTag(action) {
  yield deleteTag(action.emojiId, action.tagId, action.accessToken);
}

export default function* emojiSaga() {
  yield takeEvery(GET, sageGetEmoji);
  yield takeEvery(DELETE_TAG, sageDeleteTag);
}
