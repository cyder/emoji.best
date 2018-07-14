import * as types from '../constants/upload-emoji';

const initialState = {
  emojis: [],
  isFinished: false,
};

const uploadEmoji = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD:
      return {
        ...state,
        emojis: [...state.emojis, action.emoji],
        isFinished: false,
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
    case types.FAILED_UPLOAD:
    case types.FAILED_SAVE: {
      const emojis = state.emojis.map(emoji => (
        emoji.id === action.id ? {
          ...emoji,
          status: action.status,
          errorMessage: action.message,
        } : emoji
      ));
      return {
        ...state,
        emojis,
      };
    }
    case types.DELETE: {
      const emojis = state.emojis.filter(emoji => emoji.id !== action.id);
      return {
        ...state,
        emojis,
      };
    }
    case types.SUCCESS_SAVE: {
      const emojis = state.emojis.filter(emoji => emoji.id !== action.id);
      return {
        ...state,
        emojis,
        isFinished: emojis.length === 0,
      };
    }
    default:
      return state;
  }
};

export default uploadEmoji;
