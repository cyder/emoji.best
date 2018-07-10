import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { SIGNIN, SIGNUP, SIGNOUT } from '../constants/myself';
import {
  successSignIn,
  successSignUp,
  successSignOut,
  failedSignIn,
  failedSignUp,
} from '../actions/myself';
import { signIn, signUp, signOut } from '../api';

function* sageSignIn(action) {
  try {
    const json = yield signIn(action.email, action.password);
    yield put(successSignIn(json.user, json.access_token));
    yield put(push('/'));
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
    yield put(push('/'));
  } catch (status) {
    yield put(failedSignUp(status));
  }
}

function* sageSignOut(action) {
  yield signOut(action.accessToken);
  yield put(successSignOut());
}

export default function* emojisSaga() {
  yield takeEvery(SIGNIN, sageSignIn);
  yield takeEvery(SIGNUP, sageSignUp);
  yield takeEvery(SIGNOUT, sageSignOut);
}
