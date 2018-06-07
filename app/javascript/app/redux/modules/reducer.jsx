const initialState = {
  emojiList: [
    { id: 0, name: 'emoji1' },
    { id: 1, name: 'emoji2' },
    { id: 2, name: 'emoji3' },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
