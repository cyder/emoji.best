import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.header`
`;

class UploadEmoji extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { status } = this.props.emoji;
    return (
      <Container>
        { status }
      </Container>
    )
  }
}

UploadEmoji.propTypes = {
  emoji: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default UploadEmoji;
