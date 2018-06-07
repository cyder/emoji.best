import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';

const App = ({ emojiList }) => (
  <div>
    <Header />
    <EmojiList emojiList={emojiList} />
  </div>
);

function mapStateToProps(state) {
  return state;
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
