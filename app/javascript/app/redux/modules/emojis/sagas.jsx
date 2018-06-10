import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { LOAD } from './types';
import { sucessLoadEmojis } from './actions';

function* sageLoadEmojis() {
  const json = yield fetch('api/v1/search').then(response => response.json());
  yield put(sucessLoadEmojis(json.emojis));
}

export default function* emojiSaga() {
  yield takeEvery(LOAD, sageLoadEmojis);
}
