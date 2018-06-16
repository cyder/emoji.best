import { combineReducers } from 'redux';

import emojis from './emojis';
import downloadCart from './download-cart';

export default combineReducers({
  emojis,
  downloadCart,
});
