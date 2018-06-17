import * as types from '../constants/popup-manager';

const initialState = null;

const popupManager = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SIGN_UP:
      return 'sign_up';
    case types.SHOW_SIGN_IN:
      return 'sign_in';
    case types.CLOSE:
      return null;
    default:
      return state;
  }
};

export default popupManager;
