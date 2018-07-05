import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { GET } from '../constants/emoji';
import { successGetEmoji } from '../actions/emoji';
import { getEmoji } from '../api';

function* sageGetEmoji(action) {
  const json = yield getEmoji(action.id);
  yield put(successGetEmoji(json.emoji));
}

export default function* emojiSaga() {
  yield takeEvery(GET, sageGetEmoji);
}
