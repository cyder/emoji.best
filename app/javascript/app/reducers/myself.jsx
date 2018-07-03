import * as types from '../constants/myself';

const initialState = {
  status: types.STATUS.SIGNOUT,
  user: null,
  accessToken: null,
};

const myself = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN:
    case types.SIGNUP:
      return {
        ...state,
        status: types.STATUS.LOADING,
      };
    case types.SUCCESS_SIGNIN:
    case types.SUCCESS_SIGNUP:
      return {
        ...state,
        status: types.STATUS.SIGNIN,
        user: action.user,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};

export default myself;
