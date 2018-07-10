import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';

import EmojiList from '../components/emoji-list';
import DownloadCart from '../components/download-cart';
import EmojiListShape from '../components/shapes/emoji-list';
import DownloadCartShape from '../components/shapes/download-cart';
import Header from '../containers/header';
import { STATUS } from '../constants/emojis';

import * as EmojisActions from '../actions/emojis';
import * as DownloadCartActions from '../actions/download-cart';

class MainCopntent extends Component {
  constructor(props) {
    super(props);

    this.onChanged = this.onChanged.bind(this);
  }

  componentWillMount() {
    const params = new URLSearchParams(this.props.router.location.search);
    this.props.searchEmojis(params.get('keyword'), params.get('order'));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onChanged);
  }

  componentWillReceiveProps(nextProps) {
    const params = new URLSearchParams(nextProps.router.location.search);
    const keyword = params.get('keyword');
    const order = params.get('order');
    const isChangeKeyword = keyword !== nextProps.emojis.keyword;
    const isChangeOrder = order !== nextProps.emojis.order;
    const isChangedParams = isChangeKeyword || isChangeOrder;
    const isRootLocation = nextProps.router.location.pathname === '/';

    if (isChangedParams && isRootLocation) {
      this.props.searchEmojis(keyword, order);
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
      this.props.loadNextEmojis(page, this.props.emojis.keyword, this.props.emojis.order);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <ReactResizeDetector handleHeight onResize={this.onChanged}>
          <EmojiList
            emojis={this.props.emojis}
            cart={this.props.downloadCart}
            searchEmojis={this.props.searchEmojis}
            addEmojiToDownloadCart={this.props.addEmojiToDownloadCart}
            deleteEmojiFromDownloadCart={this.props.deleteEmojiFromDownloadCart}
            pushUrl={this.props.pushUrl}
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

const MainCopntentContainer = connect(mapStateToProps, mapDispatchProps)(MainCopntent);

MainCopntent.propTypes = {
  emojis: EmojiListShape.isRequired,
  downloadCart: DownloadCartShape.isRequired,
  searchEmojis: PropTypes.func.isRequired,
  loadNextEmojis: PropTypes.func.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
  downloadEmojis: PropTypes.func.isRequired,
  pushUrl: PropTypes.func.isRequired,
  router: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MainCopntentContainer;
