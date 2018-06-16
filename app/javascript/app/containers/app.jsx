import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';
import EmojiListShape from '../components/shapes/emoji-list';

import * as EmojiActions from '../actions/emojis';
import * as DownloadCartActions from '../actions/download-cart';

class App extends Component {
  componentWillMount() {
    this.props.loadEmojis();
  }

  render() {
    return (
      <div>
        <Header />
        <EmojiList
          list={this.props.emojis.list}
          addEmojiToDownloadCart={this.props.addEmojiToDownloadCart}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...EmojiActions,
    ...DownloadCartActions,
  }, dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchProps)(App);

App.propTypes = {
  emojis: PropTypes.shape({
    list: EmojiListShape.isRequired,
  }).isRequired,
  loadEmojis: PropTypes.func.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
};

export default AppContainer;
