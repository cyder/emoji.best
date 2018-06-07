import { createStore } from 'redux';

import reducer from './modules/reducer';

const initialState = {
};

const store = createStore(
  reducer,
  initialState,
);

export default store;
