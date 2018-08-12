import * as types from '../constants/download-cart';

const initialState = {
  list: [],
  downloadLink: '',
};

const generateDownloadLink = (list) => {
  const params = new URLSearchParams();
  list.forEach(emoji => params.append('emojis[]', emoji.id));
  return `/api/v1/download?${params.toString()}`;
};

const downloadCart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD: {
      const list = [action.emoji, ...state.list];

      return {
        ...state,
        list,
        downloadLink: generateDownloadLink(list),
      };
    }
    case types.DELETE: {
      const list = state.list.filter(emoji => emoji.id !== action.emoji.id);
      return {
        ...state,
        list,
        downloadLink: generateDownloadLink(list),
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
