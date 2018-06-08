import { createStore } from 'redux';

import reducer from './modules/reducer';

const store = createStore(reducer);

export default store;
