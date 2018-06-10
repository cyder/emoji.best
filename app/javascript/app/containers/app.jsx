import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';
import EmojiListShape from '../components/shapes/emoji-list';

import * as Actions from '../redux/modules/reducer';

class App extends Component {
  componentWillMount() {
    this.props.loadEmojis();
  }

  render() {
    return (
      <div>
        <Header />
        <EmojiList emojiList={this.props.emojiList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({ ...Actions }, dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchProps)(App);

App.propTypes = {
  emojiList: EmojiListShape.isRequired,
  loadEmojis: PropTypes.func.isRequired,
};

export default AppContainer;
