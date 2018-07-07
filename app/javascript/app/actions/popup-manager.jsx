import * as types from '../constants/popup-manager';

export function showSignInPopup() {
  return { type: types.SHOW_SIGN_IN };
}

export function showSignUpPopup() {
  return { type: types.SHOW_SIGN_UP };
}

export function showUploadPopup() {
  return { type: types.SHOW_UPLOAD };
}

export function closePopup(target = null) {
  return { type: types.CLOSE, target };
}
