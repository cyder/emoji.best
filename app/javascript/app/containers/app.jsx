import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';
import DownloadCart from '../components/download-cart';
import PopupManager from '../components/popup-manager';
import EmojiListShape from '../components/shapes/emoji-list';
import DownloadCartShape from '../components/shapes/download-cart';

import * as EmojisActions from '../actions/emojis';
import * as DownloadCartActions from '../actions/download-cart';
import * as PopupManagerActions from '../actions/popup-manager';

class App extends Component {
  componentWillMount() {
    this.props.loadEmojis();
  }

  render() {
    return (
      <div>
        <Header
          searchEmojis={this.props.searchEmojis}
          showSignInPopup={this.props.showSignInPopup}
          showSignUpPopup={this.props.showSignUpPopup}
        />
        <EmojiList
          emojis={this.props.emojis}
          cart={this.props.downloadCart}
          addEmojiToDownloadCart={this.props.addEmojiToDownloadCart}
          deleteEmojiFromDownloadCart={this.props.deleteEmojiFromDownloadCart}
        />
        <DownloadCart
          cart={this.props.downloadCart}
          deleteEmojiFromDownloadCart={this.props.deleteEmojiFromDownloadCart}
        />
        <PopupManager
          show={this.props.popupManager}
          closePopup={this.props.closePopup}
          showSignInPopup={this.props.showSignInPopup}
          showSignUpPopup={this.props.showSignUpPopup}
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
    ...EmojisActions,
    ...DownloadCartActions,
    ...PopupManagerActions,
  }, dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchProps)(App);

App.propTypes = {
  emojis: EmojiListShape.isRequired,
  downloadCart: DownloadCartShape.isRequired,
  popupManager: PropTypes.string,
  loadEmojis: PropTypes.func.isRequired,
  searchEmojis: PropTypes.func.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
  showSignInPopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
};

App.defaultProps = {
  popupManager: null,
};

export default AppContainer;
