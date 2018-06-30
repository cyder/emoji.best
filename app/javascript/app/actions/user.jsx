import * as types from '../constants/user';

export function signIn(email, password) {
  return { type: types.SIGNIN, email, password };
}

export function successSignIn(user, accessToken) {
  return { type: types.SUCCESS_SIGNIN, user, accessToken };
}
