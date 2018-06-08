import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';
import EmojiListShape from '../components/shapes/emoji-list';

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

App.propTypes = {
  emojiList: EmojiListShape.isRequired,
};

export default AppContainer;
