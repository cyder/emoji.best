import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { LOAD } from '../constants/emojis';
import { sucessLoadEmojis } from '../actions/emojis';
import searchEmojis from '../api';

function* sageLoadEmojis() {
  const json = yield searchEmojis();
  yield put(sucessLoadEmojis(json.emojis));
}

export default function* emojisSaga() {
  yield takeEvery(LOAD, sageLoadEmojis);
}
