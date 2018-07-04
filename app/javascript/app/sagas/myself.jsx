import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

import { SIGNIN, SIGNUP } from '../constants/myself';
import { successSignIn, successSignUp } from '../actions/myself';
import { closePopup } from '../actions/popup-manager';
import { POPUP } from '../constants/popup-manager';
import { signIn, signUp } from '../api';

function* sageSignIn(action) {
  yield signIn(action.email, action.password)
    .then((json) => {
      put(successSignIn(json.user, json.access_token));
      put(closePopup(POPUP.SIGN_IN));
    })
    .catch(() => {});
}

function* sageSignUp(action) {
  yield signUp(action.name, action.email, action.password, action.passwordConfirm)
    .then((json) => {
      put(successSignUp(json.user, json.access_token));
      put(closePopup(POPUP.SIGN_UP));
    })
    .catch(() => {});
}

export default function* emojisSaga() {
  yield takeEvery(SIGNIN, sageSignIn);
  yield takeEvery(SIGNUP, sageSignUp);
}
