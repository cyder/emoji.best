import * as types from '../constants/emojis';

const initialState = {
  status: types.STATUS.EMPTY,
  lastPage: 0,
  order: null,
  keyword: null,
  target: null,
  list: [],
};

const emojis = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return {
        ...state,
        lastPage: 0,
        status: types.STATUS.LOADING,
        keyword: action.keyword,
        order: action.order,
        target: action.target,
        list: [],
      };
    case types.LOAD_NEXT:
      return {
        ...state,
        lastPage: action.page,
        status: types.STATUS.LOADING,
      };
    case types.SUCCESS_LOAD:
      return {
        ...state,
        status: action.status,
        list: [...state.list, ...action.emojis],
      };
    default:
      return state;
  }
};

export default emojis;
