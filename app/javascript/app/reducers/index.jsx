import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import emojis from './emojis';
import emoji from './emoji';
import downloadCart from './download-cart';
import uploadEmoji from './upload-emoji';
import myself from './myself';

export default combineReducers({
  emojis,
  emoji,
  downloadCart,
  uploadEmoji,
  myself,
  router: routerReducer,
});
