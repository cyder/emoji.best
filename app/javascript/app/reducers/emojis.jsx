import * as types from '../constants/emojis';

const initialState = {
  keyword: null,
  list: [],
};

const emojis = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD:
      return {
        ...state,
        keyword: null,
        list: [],
      };
    case types.SEARCH:
      return {
        ...state,
        keyword: action.keyword,
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
