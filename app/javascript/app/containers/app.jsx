import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';
import DownloadCart from '../components/download-cart';
import EmojiListShape from '../components/shapes/emoji-list';
import DownloadCartShape from '../components/shapes/download-cart';

import * as EmojiActions from '../actions/emojis';
import * as DownloadCartActions from '../actions/download-cart';

class App extends Component {
  componentWillMount() {
    this.props.loadEmojis();
  }

  render() {
    return (
      <div>
        <Header
          order={this.props.emojis.order}
          searchEmojis={this.props.searchEmojis}
        />
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
  emojis: EmojiListShape.isRequired,
  loadEmojis: PropTypes.func.isRequired,
  downloadCart: DownloadCartShape.isRequired,
  searchEmojis: PropTypes.func.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
};

export default AppContainer;
