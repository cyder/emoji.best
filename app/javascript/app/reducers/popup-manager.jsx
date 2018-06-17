import * as types from '../constants/popup-manager';

const initialState = null;

const popupManager = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SIGN_UP:
      return types.SIGN_UP_POPUP;
    case types.SHOW_SIGN_IN:
      return types.SIGN_IN_POPUP;
    case types.CLOSE:
      return null;
    default:
      return state;
  }
};

export default popupManager;
