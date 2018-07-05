import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import EmojiShape from '../components/shapes/emoji';
import { STATUS } from '../constants/emoji';
import * as EmojiActions from '../actions/emoji';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 10px;
`;

class EmojiDetail extends Component {
  componentWillMount() {
    this.props.getEmoji(this.props.match.params.id);
  }

  render() {
    const { status, emoji } = this.props.emoji;
    return (
      <Background>
        <Container>
          {
            status === STATUS.SHOWING ? (<h1>{ emoji.name }</h1>) : null
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
