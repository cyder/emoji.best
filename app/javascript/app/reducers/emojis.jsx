import * as types from '../constants/emojis';

const initialState = {
  list: [],
};

const emojis = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD:
      return {
        ...state,
        list: [],
      };
    case types.SEARCH:
      return {
        ...state,
        list: [],
      };
    case types.SUCCESS_LOAD:
      return {
        ...state,
        list: action.emojis,
      };
    default:
      return state;
  }
};

export default emojis;
