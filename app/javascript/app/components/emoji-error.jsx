import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmptyImage from 'images/empty.png';

import { CloseButton } from '../components/css/popup';

const Content = styled.div`
  max-width: 660px;
  width: 80vw;
  padding: 40px 20px;
  text-align: center;
`;

const Img = styled.img`
  width: 200px;
  margin: 10px;
`;

const Message = styled.p`
  font-size: 2rem;
  margin: 10px 0;
`;

const EmojiError = ({ onClose }) => (
  <article>
    <Content>
      <Img alt="No result found" src={EmptyImage} />
      <Message>Oops! No result found.</Message>
    </Content>
    <CloseButton onClick={onClose} />
  </article>
);

EmojiError.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EmojiError;
