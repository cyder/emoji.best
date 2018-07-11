import * as types from '../constants/myself';

export function authentication(accessToken) {
  return { type: types.AUTH, accessToken };
}

export function signIn(email, password) {
  return { type: types.SIGNIN, email, password };
}

export function signUp(name, email, password, passwordConfirm) {
  return {
    type: types.SIGNUP,
    name,
    email,
    password,
    passwordConfirm,
  };
}

export function signOut(accessToken) {
  return { type: types.SIGNOUT, accessToken };
}

export function successSignIn(user, accessToken) {
  return { type: types.SUCCESS_SIGNIN, user, accessToken };
}

export function successSignUp(user, accessToken) {
  return { type: types.SUCCESS_SIGNUP, user, accessToken };
}

export function successSignOut() {
  return { type: types.SUCCESS_SIGNOUT };
}

export function failedSignIn(status) {
  const errorMessage = (() => {
    switch (status) {
      case 400:
      case 404:
        return 'Invalid email or password.';
      default:
        return 'Unknown Error';
    }
  })();
  return { type: types.FAILED_SIGNIN, errorMessage };
}

export function failedSignUp(status) {
  const errorMessage = (() => {
    switch (status) {
      case 400: return 'An error occurred. This email may already be in use.';
      default: return 'Unknown Error';
    }
  })();
  return { type: types.FAILED_SIGNUP, errorMessage };
}

export function clearError() {
  return { type: types.CLEAR_ERROR };
}
