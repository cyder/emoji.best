import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';

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
    this.props.searchEmojis(this.props.keyword, this.props.order);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword !== this.props.keyword || nextProps.order !== this.props.order) {
      this.props.searchEmojis(nextProps.keyword, nextProps.order);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <EmojiList
          emojis={this.props.emojis}
          keyword={this.props.keyword}
          order={this.props.order}
          cart={this.props.downloadCart}
          addEmojiToDownloadCart={this.props.addEmojiToDownloadCart}
          deleteEmojiFromDownloadCart={this.props.deleteEmojiFromDownloadCart}
          onChangeOrder={this.props.onChangeOrder}
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

const urlPropsQueryConfig = {
  keyword: { type: UrlQueryParamTypes.string },
  order: { type: UrlQueryParamTypes.string },
};

const AppContainer = addUrlProps({
  urlPropsQueryConfig,
})(connect(mapStateToProps, mapDispatchProps)(App));

App.propTypes = {
  emojis: EmojiListShape.isRequired,
  downloadCart: DownloadCartShape.isRequired,
  searchEmojis: PropTypes.func.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
  downloadEmojis: PropTypes.func.isRequired,
  keyword: PropTypes.string,
  order: PropTypes.string,
  onChangeOrder: PropTypes.func.isRequired,
};

App.defaultProps = {
  keyword: null,
  order: null,
};

export default AppContainer;
