import * as types from '../constants/myself';

const initialState = {
  user: null,
  accessToken: null,
};

const myself = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_SIGNIN:
      return {
        ...state,
        user: action.user,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};

export default myself;
