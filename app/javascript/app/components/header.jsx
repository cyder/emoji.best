import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoImage from 'images/logo.png';

import SearchForm from './search-form';

const Container = styled.header`
  color: #ffffff;
  background-color: #2d2d2d;
  padding: 60px 5%;
`;

const Title = styled.header`
  text-align: center;
`;

const Logo = styled.img`
  width: 360px;
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 10px 0 30px;
`;

const Header = ({ searchEmojis }) => (
  <Container>
    <Title><Logo alt="emoji.best" src={LogoImage} /></Title>
    <SubTitle>{'Let\'s share emojis!!'}</SubTitle>
    <SearchForm searchEmojis={searchEmojis} />
  </Container>
);

Header.propTypes = {
  searchEmojis: PropTypes.func.isRequired,
};

export default Header;
