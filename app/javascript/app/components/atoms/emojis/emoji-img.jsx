import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EmojiImg = ({ src, alt }) => (
  <Img src={src} alt={alt} />
);

const Img = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

EmojiImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default EmojiImg;
