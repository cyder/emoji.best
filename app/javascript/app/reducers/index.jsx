import { combineReducers } from 'redux';

import emojis from './emojis';
import downloadCart from './download-cart';
import popupManager from './popup-manager';
import user from './user';

export default combineReducers({
  emojis,
  downloadCart,
  popupManager,
  user,
});
