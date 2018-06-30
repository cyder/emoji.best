import 'babel-polyfill';
import { all } from 'redux-saga/effects';

import emojisSaga from './emojis';
import user from './user';

export default function* rootSaga() {
  yield all([
    emojisSaga(),
    user(),
  ]);
}
