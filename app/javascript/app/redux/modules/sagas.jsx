import 'babel-polyfill';
import { all } from 'redux-saga/effects';

import emojisSaga from './emojis/sagas';

export default function* rootSaga() {
  yield all([
    emojisSaga(),
  ]);
}
