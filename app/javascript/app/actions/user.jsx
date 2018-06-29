import * as types from '../constants/user';

export function signIn(email, password) {
  return { type: types.SIGNIN, email, password };
}
