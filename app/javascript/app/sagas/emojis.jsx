import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { LOAD } from '../constants/emojis';
import { successLoadEmojis } from '../actions/emojis';
import searchEmojis from '../api';

function* sageLoadEmojis() {
  const json = yield searchEmojis();
  yield put(successLoadEmojis(json.emojis));
}

export default function* emojisSaga() {
  yield takeEvery(LOAD, sageLoadEmojis);
}
