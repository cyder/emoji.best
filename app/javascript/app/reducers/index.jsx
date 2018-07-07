import { combineReducers } from 'redux';

import emojis from './emojis';
import downloadCart from './download-cart';
import uploadEmoji from './upload-emoji';
import popupManager from './popup-manager';
import myself from './myself';

export default combineReducers({
  emojis,
  downloadCart,
  uploadEmoji,
  popupManager,
  myself,
});
