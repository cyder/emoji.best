import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EmojiPopup from '../components/emoji-popup';
import EmojiShape from '../components/shapes/emoji';
import { Background, Container } from '../components/css/popup';
import { STATUS } from '../constants/emoji';
import * as EmojiActions from '../actions/emoji';

class EmojiDetail extends Component {
  componentWillMount() {
    this.props.getEmoji(this.props.match.params.id);

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    if (this.props.history.location.state === undefined) {
      this.props.history.push('/');
    } else {
      this.props.history.goBack();
    }
  }

  render() {
    const { status, emoji } = this.props.emoji;
    return (
      <Background isShow>
        <Container>
          {
            status === STATUS.SHOWING
              ? (<EmojiPopup emoji={emoji} onClose={this.onClose} />)
              : null
          }
        </Container>
      </Background>
    );
  }
}

function mapStateToProps(state) {
  return { emoji: state.emoji };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...EmojiActions,
  }, dispatch);
}

EmojiDetail.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    location: PropTypes.shape({
      state: PropTypes.string,
    }).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  emoji: PropTypes.shape({
    status: PropTypes.string.isRequired,
    emoji: EmojiShape,
  }).isRequired,
  getEmoji: PropTypes.func.isRequired,
};

const EmojiDetailContainer = connect(mapStateToProps, mapDispatchProps)(EmojiDetail);

export default EmojiDetailContainer;
