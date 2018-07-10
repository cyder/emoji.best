import * as types from '../constants/emoji';

const initialState = {
  status: types.STATUS.EMPTY,
  emoji: null,
};

const emoji = (state = initialState, action) => {
  switch (action.type) {
    case types.GET:
      return {
        ...state,
        status: types.STATUS.LOADING,
        emoji: null,
      };
    case types.SUCCESS_GET:
      return {
        ...state,
        status: types.STATUS.SHOWING,
        emoji: action.emoji,
      };
    case types.DELETE_TAG: {
      const tags = state.emoji.tags.filter(tag => tag.id !== action.tagId);
      return {
        ...state,
        emoji: {
          ...state.emoji,
          tags,
        },
      };
    }
    default:
      return state;
  }
};

export default emoji;
