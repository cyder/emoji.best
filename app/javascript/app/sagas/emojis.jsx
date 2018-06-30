import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { LOAD, SEARCH, LOAD_NEXT } from '../constants/emojis';
import { successLoadEmojis } from '../actions/emojis';
import { searchEmojis } from '../api';

function* sageLoadEmojis() {
  const json = yield searchEmojis('new');
  yield put(successLoadEmojis(json.emojis));
}

function* sageSearchEmojis(action) {
  const json = yield searchEmojis(action.order, action.keyword, action.page);
  yield put(successLoadEmojis(json.emojis));
}

export default function* emojisSaga() {
  yield takeEvery(LOAD, sageLoadEmojis);
  yield takeEvery(SEARCH, sageSearchEmojis);
  yield takeEvery(LOAD_NEXT, sageSearchEmojis);
}
