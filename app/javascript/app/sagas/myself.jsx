import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { AUTH, SIGNIN, SIGNUP, SIGNOUT } from '../constants/myself';
import {
  successSignIn,
  successSignUp,
  successSignOut,
  failedSignIn,
  failedSignUp,
} from '../actions/myself';
import { closePopup } from '../actions/popup-manager';
import { POPUP } from '../constants/popup-manager';
import { authentication, signIn, signUp, signOut } from '../api';

function* sageAuthentication(action) {
  try {
    const json = yield authentication(action.accessToken);
    yield put(successSignIn(json.user, action.accessToken));
    yield put(closePopup(POPUP.SIGN_IN));
    yield put(closePopup(POPUP.SIGN_UP));
  } catch (status) {
    yield put(failedSignIn(status));
  }
}

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

function* sageSignOut(action) {
  yield signOut(action.accessToken);
  yield put(successSignOut());
}

export default function* emojisSaga() {
  yield takeEvery(AUTH, sageAuthentication);
  yield takeEvery(SIGNIN, sageSignIn);
  yield takeEvery(SIGNUP, sageSignUp);
  yield takeEvery(SIGNOUT, sageSignOut);
}
