import * as types from '../constants/emojis';

const initialState = {
  status: types.STATUS.EMPTY,
  keyword: null,
  order: 'new',
  lastPage: 0,
  list: [],
};

const emojis = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD:
      return {
        ...state,
        lastPage: 0,
        status: types.STATUS.LOADING,
        keyword: null,
        list: [],
      };
    case types.SEARCH:
      return {
        ...state,
        lastPage: 0,
        status: types.STATUS.LOADING,
        keyword: action.keyword,
        order: action.order,
        list: [],
      };
    case types.LOAD_NEXT:
      return {
        ...state,
        lastPage: action.page,
        status: types.STATUS.LOADING,
        keyword: action.keyword,
        order: action.order,
      };
    case types.SUCCESS_LOAD:
      return {
        ...state,
        status: types.STATUS.SHOWING,
        list: [...state.list, ...action.emojis],
      };
    default:
      return state;
  }
};

export default emojis;
