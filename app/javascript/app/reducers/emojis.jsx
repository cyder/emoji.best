import * as types from '../constants/emojis';

const initialState = {
  status: types.STATUS.EMPTY,
  keyword: null,
  order: 'new',
  list: [],
};

const emojis = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD:
      return {
        ...state,
        status: types.STATUS.LOADING,
        keyword: null,
        list: [],
      };
    case types.SEARCH:
      return {
        ...state,
        status: types.STATUS.LOADING,
        keyword: action.keyword,
        order: action.order,
        list: [],
      };
    case types.SUCCESS_LOAD:
      return {
        ...state,
        status: types.STATUS.SHOWING,
        list: action.emojis,
      };
    default:
      return state;
  }
};

export default emojis;
