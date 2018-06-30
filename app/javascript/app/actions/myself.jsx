import * as types from '../constants/myself';

export function signIn(email, password) {
  return { type: types.SIGNIN, email, password };
}

export function successSignIn(user, accessToken) {
  return { type: types.SUCCESS_SIGNIN, user, accessToken };
}
