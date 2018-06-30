import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { SIGNIN } from '../constants/myself';
import { successSignIn } from '../actions/myself';
import { closePopup } from '../actions/popup-manager';
import { SIGN_IN_POPUP } from '../constants/popup-manager';
import { signIn } from '../api';

function* sageSignIn(action) {
  const json = yield signIn(action.email, action.password);
  yield put(successSignIn(json.user, json.access_token));
  yield put(closePopup(SIGN_IN_POPUP));
}

export default function* emojisSaga() {
  yield takeEvery(SIGNIN, sageSignIn);
}
