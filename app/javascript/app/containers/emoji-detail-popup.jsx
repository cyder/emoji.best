import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EmojiDetail from '../components/emoji-detail';
import EmojiError from '../components/emoji-error';
import EmojiShape from '../components/shapes/emoji';
import { Background, Container } from '../components/css/popup';
import { STATUS } from '../constants/emoji';
import * as EmojiActions from '../actions/emoji';

class EmojiDetailPopup extends Component {
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
            (() => {
              switch (status) {
                case STATUS.SHOWING:
                  return (<EmojiDetail emoji={emoji} onClose={this.onClose} />);
                case STATUS.ERROR:
                  return (<EmojiError onClose={this.onClose} />);
                default:
                  return null;
              }
            })()
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

EmojiDetailPopup.propTypes = {
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

const EmojiDetailPopupContainer = connect(mapStateToProps, mapDispatchProps)(EmojiDetailPopup);

export default EmojiDetailPopupContainer;
