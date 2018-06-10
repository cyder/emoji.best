import * as types from './types';

const initialState = {
  emojiList: [],
};

const emojis = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD:
      return {
        ...state,
        emojiList: [],
      };
    case types.SUCCESS_LOAD:
      return {
        ...state,
        emojiList: action.emojis,
      };
    default: return state;
  }
};

export default emojis;
