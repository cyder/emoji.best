import * as types from '../constants/popup-manager';

const initialState = null;

const popupManager = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SIGN_UP:
      return types.POPUP.SIGN_UP;
    case types.SHOW_SIGN_IN:
      return types.POPUP.SIGN_IN;
    case types.CLOSE:
      if (action.target === null || action.target === state) {
        return null;
      }
      return state;
    default:
      return state;
  }
};

export default popupManager;
