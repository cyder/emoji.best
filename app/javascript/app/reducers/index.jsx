import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import emojis from './emojis';
import emoji from './emoji';
import downloadCart from './download-cart';
import popupManager from './popup-manager';
import myself from './myself';

export default combineReducers({
  emojis,
  emoji,
  downloadCart,
  popupManager,
  myself,
  router: routerReducer,
});
