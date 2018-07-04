import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBackImage from 'images/header-back.jpg';
import LogoImage1 from 'images/logo/logo1.png';
import LogoImage2 from 'images/logo/logo2.png';
import LogoImage3 from 'images/logo/logo3.png';
import LogoImage4 from 'images/logo/logo4.png';
import LogoImage5 from 'images/logo/logo5.png';
import LogoImage6 from 'images/logo/logo6.png';
import LogoImage7 from 'images/logo/logo7.png';
import LogoImage8 from 'images/logo/logo8.png';
import LogoImage9 from 'images/logo/logo9.png';
import LogoImage10 from 'images/logo/logo10.png';
import LogoImage11 from 'images/logo/logo11.png';

import SearchForm from '../containers/search-form';
import Navigation from '../containers/navigation';

const Container = styled.header`
  color: #ffffff;
  background-image: url(${HeaderBackImage});
  background-position: center;
  background-size: cover;
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

const selectLogoImage = () => {
  const LogoImages = [
    LogoImage1,
    LogoImage2,
    LogoImage3,
    LogoImage4,
    LogoImage5,
    LogoImage6,
    LogoImage7,
    LogoImage8,
    LogoImage9,
    LogoImage10,
    LogoImage11,
  ];
  const id = Math.floor(Math.random() * LogoImages.length);
  return LogoImages[id];
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { logoImage: selectLogoImage() };
  }

  render() {
    return (
      <Container>
        <Title><Logo alt="emoji.best" src={this.state.logoImage} /></Title>
        <SubTitle>{'Let\'s share emojis!!'}</SubTitle>
        <SearchForm />
        <Navigation />
      </Container>
    );
  }
}

export default Header;
