import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { GET, ADD_TAG, DELETE_TAG } from '../constants/emoji';
import { successGetEmoji, successAddTag } from '../actions/emoji';
import { getEmoji, createTag, deleteTag } from '../api';

function* sageGetEmoji(action) {
  const json = yield getEmoji(action.id);
  yield put(successGetEmoji(json.emoji));
}

function* sageAddTag(action) {
  const json = yield createTag(action.emojiId, action.name, action.accessToken);
  yield put(successAddTag(json.tag));
}

function* sageDeleteTag(action) {
  yield deleteTag(action.emojiId, action.tagId, action.accessToken);
}

export default function* emojiSaga() {
  yield takeEvery(GET, sageGetEmoji);
  yield takeEvery(ADD_TAG, sageAddTag);
  yield takeEvery(DELETE_TAG, sageDeleteTag);
}
