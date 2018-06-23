import React from 'react';
import styled from 'styled-components';
import LogoImage from 'images/logo.png';

import SearchForm from '../containers/search-form';
import Navigation from '../containers/navigation';

const Container = styled.header`
  color: #ffffff;
  background-color: #2d2d2d;
  padding: 60px 5%;
  position: relative;
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

const Header = () => (
  <Container>
    <Title><Logo alt="emoji.best" src={LogoImage} /></Title>
    <SubTitle>{'Let\'s share emojis!!'}</SubTitle>
    <SearchForm />
    <Navigation />
  </Container>
);

export default Header;
