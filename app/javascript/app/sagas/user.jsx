import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { SIGNIN } from '../constants/user';
import { successSignIn } from '../actions/user';
import { signIn } from '../api';

function* sageSignIn(action) {
  const json = yield signIn(action.email, action.password);
  yield put(successSignIn(json.user, json.access_token));
}

export default function* emojisSaga() {
  yield takeEvery(SIGNIN, sageSignIn);
}
