import * as types from '../constants/myself';

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

export function successSignIn(user, accessToken) {
  return { type: types.SUCCESS_SIGNIN, user, accessToken };
}

export function successSignUp(user, accessToken) {
  return { type: types.SUCCESS_SIGNUP, user, accessToken };
}
