import { combineReducers } from 'redux';

import emojis from './emojis';
import popupManager from './popup-manager';

export default combineReducers({
  emojis,
  popupManager,
});
