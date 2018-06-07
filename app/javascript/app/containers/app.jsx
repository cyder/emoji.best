import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';

const App = () => (
  <div>
    <Header />
    <EmojiList emojiList={[
      { id: 0, name: 'emoji1' },
      { id: 1, name: 'emoji2' },
      { id: 2, name: 'emoji3' },
    ]}
    />
  </div>
);

function mapStateToProps(state) {
  return {
    state,
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
