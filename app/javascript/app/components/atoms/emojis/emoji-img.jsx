import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EmojiImg = ({ src }) => (
  <Img src={src} />
);

const Img = styled.div`
  background-image: url("${props => props.src}");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

EmojiImg.propTypes = {
  src: PropTypes.string.isRequired,
};

export default EmojiImg;
