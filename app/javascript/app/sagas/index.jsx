import 'babel-polyfill';
import { all } from 'redux-saga/effects';

import emojisSaga from './emojis';
import myself from './myself';

export default function* rootSaga() {
  yield all([
    emojisSaga(),
    myself(),
  ]);
}
