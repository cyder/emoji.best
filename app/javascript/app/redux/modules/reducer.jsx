import 'babel-polyfill';
import { takeEvery, put } from 'redux-saga/effects';

const LOAD = 'LOAD';
const SUCCESS_LOAD = 'SUCCESS_LOAD';

const initialState = {
  emojiList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        emojiList: [],
      };
    case SUCCESS_LOAD:
      return {
        ...state,
        emojiList: action.emojis,
      };
    default: return state;
  }
};

export function loadEmojis() {
  return { type: LOAD };
}

export function sucessLoadEmojis(emojis) {
  return { type: SUCCESS_LOAD, emojis };
}

function* sageLoadEmojis() {
  const json = yield fetch('api/v1/search').then(response => response.json());
  yield put(sucessLoadEmojis(json.emojis));
}

export function* rootSaga() {
  yield takeEvery(LOAD, sageLoadEmojis);
}

export default reducer;
