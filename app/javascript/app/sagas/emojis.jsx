import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { SEARCH } from '../constants/emojis';
import { successLoadEmojis } from '../actions/emojis';
import { searchEmojis } from '../api';

function* sageSearchEmojis(action) {
  const json = yield searchEmojis(action.order, action.keyword);
  yield put(successLoadEmojis(json.emojis));
}

export default function* emojisSaga() {
  yield takeEvery(SEARCH, sageSearchEmojis);
}
