import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { SEARCH, LOAD_NEXT } from '../constants/emojis';
import { successLoadEmojis } from '../actions/emojis';
import api from '../api';

function* sageSearchEmojis(action) {
  const json = yield api.searchEmojis(
    action.order,
    action.keyword,
    action.page,
    action.target,
    action.accessToken,
  );
  yield put(successLoadEmojis(json.emojis));
}

export default function* emojisSaga() {
  yield takeEvery(SEARCH, sageSearchEmojis);
  yield takeEvery(LOAD_NEXT, sageSearchEmojis);
}
