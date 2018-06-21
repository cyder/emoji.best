import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { LOAD, SEARCH } from '../constants/emojis';
import { successLoadEmojis } from '../actions/emojis';
import { searchEmojis } from '../api';

function* sageLoadEmojis() {
  const json = yield searchEmojis();
  yield put(successLoadEmojis(json.emojis));
}

function* sageSearchEmojis(action) {
  const json = yield searchEmojis(action.keyword);
  yield put(successLoadEmojis(json.emojis));
}

export default function* emojisSaga() {
  yield takeEvery(LOAD, sageLoadEmojis);
  yield takeEvery(SEARCH, sageSearchEmojis);
}
