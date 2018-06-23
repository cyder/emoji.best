import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';
import DownloadCart from '../components/download-cart';
import PopupManager from '../containers/popup-manager';
import EmojiListShape from '../components/shapes/emoji-list';
import DownloadCartShape from '../components/shapes/download-cart';

import * as EmojisActions from '../actions/emojis';
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
          emojis={this.props.emojis}
          cart={this.props.downloadCart}
          searchEmojis={this.props.searchEmojis}
          addEmojiToDownloadCart={this.props.addEmojiToDownloadCart}
          deleteEmojiFromDownloadCart={this.props.deleteEmojiFromDownloadCart}
        />
        <DownloadCart
          cart={this.props.downloadCart}
          deleteEmojiFromDownloadCart={this.props.deleteEmojiFromDownloadCart}
          downloadEmojis={this.props.downloadEmojis}
        />
        <PopupManager />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...EmojisActions,
    ...DownloadCartActions,
  }, dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchProps)(App);

App.propTypes = {
  emojis: EmojiListShape.isRequired,
  downloadCart: DownloadCartShape.isRequired,
  loadEmojis: PropTypes.func.isRequired,
  searchEmojis: PropTypes.func.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
  downloadEmojis: PropTypes.func.isRequired,
};

export default AppContainer;
