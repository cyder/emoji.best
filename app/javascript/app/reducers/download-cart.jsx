import * as types from '../constants/download-cart';

const initialState = {
  list: [],
};

const downloadCart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        list: [...state.list, action.emoji],
      };
    case types.DELETE:
      return {
        ...state,
        list: state.list.filter(emoji => emoji.id !== action.emoji.id),
      };
    default:
      return state;
  }
};

export default downloadCart;
