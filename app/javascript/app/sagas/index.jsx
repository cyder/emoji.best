import 'babel-polyfill';
import { all } from 'redux-saga/effects';

import emojisSaga from './emojis';
import emojiSaga from './emoji';
import myself from './myself';
import uploadEmoji from './upload-emoji';

export default function* rootSaga() {
  yield all([
    emojisSaga(),
    emojiSaga(),
    myself(),
    uploadEmoji(),
  ]);
}
