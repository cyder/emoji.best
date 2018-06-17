import * as types from '../constants/popup-manager';

export function showSignInPopup() {
  return { type: types.SHOW_SIGN_IN };
}

export function showSignUpPopup() {
  return { type: types.SHOW_SIGN_UP };
}

export function closePopup() {
  return { type: types.CLOSE };
}
