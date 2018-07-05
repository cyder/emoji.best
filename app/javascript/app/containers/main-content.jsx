import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import { addUrlProps, UrlQueryParamTypes, UrlUpdateTypes } from 'react-url-query';

import EmojiList from '../components/emoji-list';
import DownloadCart from '../components/download-cart';
import EmojiListShape from '../components/shapes/emoji-list';
import DownloadCartShape from '../components/shapes/download-cart';
import Header from '../components/header';
import { STATUS } from '../constants/emojis';

import * as EmojisActions from '../actions/emojis';
import * as DownloadCartActions from '../actions/download-cart';

class MainCopntent extends Component {
  constructor(props) {
    super(props);

    this.onChanged = this.onChanged.bind(this);
  }

  componentWillMount() {
    this.props.searchEmojis(this.props.keyword, this.props.order);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onChanged);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword !== this.props.keyword || nextProps.order !== this.props.order) {
      this.props.searchEmojis(nextProps.keyword, nextProps.order);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onChanged);
  }

  onChanged() {
    const offset = 200;
    const { body } = window.document;
    const html = window.document.documentElement;
    const scrollTop = body.scrollTop || html.scrollTop;
    const scrollBottom = html.scrollHeight - html.clientHeight - scrollTop;
    if (this.props.emojis.status === STATUS.SHOWING && scrollBottom < offset) {
      const page = this.props.emojis.lastPage + 1;
      this.props.loadNextEmojis(page, this.props.keyword, this.props.order);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <ReactResizeDetector handleHeight onResize={this.onChanged}>
          <EmojiList
            emojis={this.props.emojis}
            keyword={this.props.keyword}
            order={this.props.order}
            cart={this.props.downloadCart}
            searchEmojis={this.props.searchEmojis}
            addEmojiToDownloadCart={this.props.addEmojiToDownloadCart}
            deleteEmojiFromDownloadCart={this.props.deleteEmojiFromDownloadCart}
            onChangeOrder={this.props.onChangeOrder}
          />
        </ReactResizeDetector>
        <DownloadCart
          cart={this.props.downloadCart}
          deleteEmojiFromDownloadCart={this.props.deleteEmojiFromDownloadCart}
          downloadEmojis={this.props.downloadEmojis}
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
  }, dispatch);
}

const urlPropsQueryConfig = {
  keyword: { type: UrlQueryParamTypes.string, updateType: UrlUpdateTypes.pushIn },
  order: { type: UrlQueryParamTypes.string, updateType: UrlUpdateTypes.pushIn },
};

const MainCopntentContainer = addUrlProps({
  urlPropsQueryConfig,
})(connect(mapStateToProps, mapDispatchProps)(MainCopntent));

MainCopntent.propTypes = {
  emojis: EmojiListShape.isRequired,
  downloadCart: DownloadCartShape.isRequired,
  searchEmojis: PropTypes.func.isRequired,
  loadNextEmojis: PropTypes.func.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
  downloadEmojis: PropTypes.func.isRequired,
  keyword: PropTypes.string,
  order: PropTypes.string,
  onChangeOrder: PropTypes.func.isRequired,
};

MainCopntent.defaultProps = {
  keyword: null,
  order: null,
};

export default MainCopntentContainer;
