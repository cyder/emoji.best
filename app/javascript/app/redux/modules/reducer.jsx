const LOAD = 'LOAD';

const initialState = {
  emojiList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        emojiList: [
          { id: 0, name: 'emoji1' },
          { id: 1, name: 'emoji2' },
          { id: 2, name: 'emoji3' },
        ],
      };
    default: return state;
  }
};

export function loadEmojis() {
  return { type: LOAD };
}

export default reducer;
