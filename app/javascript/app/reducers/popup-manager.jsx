import * as types from '../constants/popup-manager';

const initialState = {
  show: null,
};

const popupManager = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SIGN_UP:
      return {
        ...state,
        show: 'sign_up',
      };
    case types.SHOW_SIGN_IN:
      return {
        ...state,
        show: 'sign_in',
      };
    case types.CLOSE:
      return {
        ...state,
        show: null,
      };
    default:
      return state;
  }
};

export default popupManager;
