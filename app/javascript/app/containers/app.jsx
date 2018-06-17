import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import EmojiList from '../components/emoji-list';
import EmojiListShape from '../components/shapes/emoji-list';

import * as Actions from '../actions/emojis';

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
          searchEmojis={this.props.searchEmojis}
        />
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
  emojis: PropTypes.shape(EmojiListShape).isRequired,
  loadEmojis: PropTypes.func.isRequired,
  searchEmojis: PropTypes.func.isRequired,
};

export default AppContainer;
