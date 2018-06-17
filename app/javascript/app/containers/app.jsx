import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';
import DownloadCart from '../components/download-cart';
import EmojiListShape from '../components/shapes/emoji-list';
import DownloadCartShape from '../components/shapes/donwload-cart';

import * as EmojiActions from '../actions/emojis';
import * as DownloadCartActions from '../actions/download-cart';

class App extends Component {
  componentWillMount() {
    this.props.loadEmojis();
  }

  render() {
    return (
      <div>
        <Header searchEmojis={this.props.searchEmojis} />
        <EmojiList
          keyword={this.props.emojis.keyword}
          list={this.props.emojis.list}
          cart={this.props.downloadCart.list}
          addEmojiToDownloadCart={this.props.addEmojiToDownloadCart}
          deleteEmojiFromDownloadCart={this.props.deleteEmojiFromDownloadCart}
        />
        <DownloadCart
          list={this.props.downloadCart.list}
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
  emojis: PropTypes.shape(EmojiListShape).isRequired,
  loadEmojis: PropTypes.func.isRequired,
  downloadCart: PropTypes.shape({
    list: DownloadCartShape.isRequired,
  }).isRequired,
  searchEmojis: PropTypes.func.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
};

export default AppContainer;
