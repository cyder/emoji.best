import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';
import PopupManager from '../components/popup-manager';
import EmojiListShape from '../components/shapes/emoji-list';

import * as EmojisActions from '../actions/emojis';
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
          keyword={this.props.emojis.keyword}
          list={this.props.emojis.list}
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
    ...PopupManagerActions,
  }, dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchProps)(App);

App.propTypes = {
  emojis: PropTypes.shape(EmojiListShape).isRequired,
  popupManager: PropTypes.string,
  loadEmojis: PropTypes.func.isRequired,
  searchEmojis: PropTypes.func.isRequired,
  showSignInPopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
};

App.defaultProps = {
  popupManager: null,
};

export default AppContainer;
