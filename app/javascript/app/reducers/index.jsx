import { combineReducers } from 'redux';

import emojis from './emojis';
import downloadCart from './download-cart';
import popupManager from './popup-manager';

export default combineReducers({
  emojis,
  downloadCart,
  popupManager,
});
