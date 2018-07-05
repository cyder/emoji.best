import * as types from '../constants/myself';

const initialState = {
  status: types.STATUS.SIGNOUT,
  user: null,
  accessToken: null,
  errorMessage: null,
};

const myself = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN:
    case types.SIGNUP:
      return {
        ...state,
        status: types.STATUS.LOADING,
        errorMessage: null,
      };
    case types.SIGNOUT:
      return initialState;
    case types.SUCCESS_SIGNIN:
    case types.SUCCESS_SIGNUP:
      return {
        ...state,
        status: types.STATUS.SIGNIN,
        user: action.user,
        accessToken: action.accessToken,
      };
    case types.FAILED_SIGNIN:
    case types.FAILED_SIGNUP:
      return {
        ...state,
        status: types.STATUS.SIGNOUT,
        errorMessage: action.errorMessage,
      };
    case types.CLEAR_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default myself;
