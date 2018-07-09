import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { GET } from '../constants/emoji';
import { successGetEmoji, failedGetEmoji } from '../actions/emoji';
import { getEmoji } from '../api';

function* sageGetEmoji(action) {
  try {
    const json = yield getEmoji(action.id);
    yield put(successGetEmoji(json.emoji));
  } catch (status) {
    yield put(failedGetEmoji());
  }
}

export default function* emojiSaga() {
  yield takeEvery(GET, sageGetEmoji);
}
