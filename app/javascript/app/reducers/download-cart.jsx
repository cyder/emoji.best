import * as types from '../constants/download-cart';

const initialState = {
  list: [],
};

const downloadCart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD: {
      const list = [action.emoji, ...state.list];

      return {
        ...state,
        list,
      };
    }
    case types.DELETE: {
      const list = state.list.filter(emoji => emoji.id !== action.emoji.id);
      return {
        ...state,
        list,
      };
    }
    case types.DOWNLOAD:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default downloadCart;
