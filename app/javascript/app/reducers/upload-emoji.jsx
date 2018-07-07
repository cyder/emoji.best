import * as types from '../constants/upload-emoji';

const initialState = {
  emojis: [],
};

const uploadEmoji = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD:
      return {
        ...state,
        emojis: [...state.emojis, action.emoji],
      };
    case types.SAVE:
    case types.SUCCESS_UPLOAD: {
      const emojis = state.emojis.map(emoji => (
        emoji.id === action.emoji.id ? action.emoji : emoji
      ));
      return {
        ...state,
        emojis,
      };
    }
    case types.DELETE:
    case types.SUCCESS_SAVE: {
      const emojis = state.emojis.filter(emoji => emoji.id !== action.id);
      return {
        ...state,
        emojis,
      };
    }
    default:
      return state;
  }
};

export default uploadEmoji;
