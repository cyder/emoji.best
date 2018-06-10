import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { LOAD } from './types';
import { sucessLoadEmojis } from './actions';
import searchEmojis from '../../../api';

function* sageLoadEmojis() {
  const json = yield searchEmojis();
  yield put(sucessLoadEmojis(json.emojis));
}

export default function* emojiSaga() {
  yield takeEvery(LOAD, sageLoadEmojis);
}
