import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { SIGNIN, SIGNUP } from '../constants/myself';
import {
  successSignIn,
  successSignUp,
  failedSignIn,
  failedSignUp,
} from '../actions/myself';
import { closePopup } from '../actions/popup-manager';
import { POPUP } from '../constants/popup-manager';
import { signIn, signUp } from '../api';

function* sageSignIn(action) {
  try {
    const json = yield signIn(action.email, action.password);
    yield put(successSignIn(json.user, json.access_token));
    yield put(closePopup(POPUP.SIGN_IN));
  } catch (status) {
    yield put(failedSignIn(status));
  }
}

function* sageSignUp(action) {
  try {
    const json = yield yield signUp(
      action.name,
      action.email,
      action.password,
      action.passwordConfirm,
    );
    yield put(successSignUp(json.user, json.access_token));
    yield put(closePopup(POPUP.SIGN_UP));
  } catch (status) {
    yield put(failedSignUp(status));
  }
}

export default function* emojisSaga() {
  yield takeEvery(SIGNIN, sageSignIn);
  yield takeEvery(SIGNUP, sageSignUp);
}
