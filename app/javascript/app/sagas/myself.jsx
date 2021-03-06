import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { AUTH, SIGNIN, SIGNUP, SIGNOUT } from '../constants/myself';
import {
  successSignIn,
  successSignUp,
  successSignOut,
  failedSignIn,
  failedSignUp,
} from '../actions/myself';
import api from '../api';

function* sageAuthentication(action) {
  try {
    const json = yield api.authentication(action.accessToken);
    yield put(successSignIn(json.user, action.accessToken));
    yield put(push(action.callbackUrl));
  } catch (status) {
    yield put(failedSignIn(status));
  }
}

function* sageSignIn(action) {
  try {
    const json = yield api.signIn(action.email, action.password);
    yield put(successSignIn(json.user, json.access_token));
    yield put(push(action.callbackUrl));
  } catch (status) {
    yield put(failedSignIn(status));
  }
}

function* sageSignUp(action) {
  try {
    const json = yield yield api.signUp(
      action.name,
      action.email,
      action.password,
      action.passwordConfirm,
    );
    yield put(successSignUp(json.user, json.access_token));
    yield put(push(action.callbackUrl));
  } catch (status) {
    yield put(failedSignUp(status));
  }
}

function* sageSignOut(action) {
  yield api.signOut(action.accessToken);
  yield put(successSignOut());
}

export default function* emojisSaga() {
  yield takeEvery(AUTH, sageAuthentication);
  yield takeEvery(SIGNIN, sageSignIn);
  yield takeEvery(SIGNUP, sageSignUp);
  yield takeEvery(SIGNOUT, sageSignOut);
}
