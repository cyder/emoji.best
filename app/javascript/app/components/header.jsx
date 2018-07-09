import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBackImage from 'images/header-back.jpg';
import PropTypes from 'prop-types';
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
import LogoImage12 from 'images/logo/logo12.png';

import SearchForm from '../containers/search-form';
import Navigation from '../containers/navigation';

const Container = styled.header`
  display: ${props => (props.isSmall ? 'flex' : 'block')};
  color: #ffffff;
  background-color: #2d2d2d;
  background-image:  ${props => (props.isSmall ? 'none' : `url(${HeaderBackImage})`)};
  background-position: center;
  background-size: cover;
  padding: ${props => (props.isSmall ? '10px 0' : '60px 5%')};
  position: ${props => (props.isSmall ? 'fixed' : 'relative')};
  ${props => (props.isSmall ? `
    width: 100%;
    z-index: 1000;
    align-items: center;
  ` : null)};
`;

const Title = styled.header`
  text-align: center;
`;

const Logo = styled.img`
  ${props => (props.isSmall ? `
    margin: 0 20px;
    width: 200px
  ` : `
    height: 70px;
  `)};
`;

const SubTitle = styled.p`
  display: ${props => (props.isSmall ? 'none' : 'block')};
  text-align: center;
  font-size: 1.5rem;
  margin: 10px 0 30px;
`;

const SearchFormArea = styled.div`
  width: ${props => (props.isSmall ? '400px' : '100%')};
  max-width: 800px;
  margin: ${props => (props.isSmall ? '0 auto 0 0' : '0 auto')};
`;

const NavigationArea = styled.nav`
  position: ${props => (props.isSmall ? 'relative' : 'absolute')};
  top: 0;
  right: 0;
  font-size: 1.2rem;
  line-height: 3.6rem;
`;

const Background = styled.div`
  height: ${props => (props.isSmall ? '77px' : '0')};
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
    LogoImage12,
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
    const { isSmall } = this.props;
    return (
      <div>
        <Container isSmall={isSmall} >
          <Title>
            <Logo alt="emoji.best" src={this.state.logoImage} isSmall={isSmall} />
          </Title>
          <SubTitle isSmall={isSmall} >{'Let\'s share emojis!!'}</SubTitle>
          <SearchFormArea isSmall={isSmall} >
            <SearchForm />
          </SearchFormArea>
          <NavigationArea isSmall={isSmall}>
            <Navigation />
          </NavigationArea>
        </Container>
        <Background isSmall={isSmall} />
      </div>
    );
  }
}

Header.propTypes = {
  isSmall: PropTypes.bool.isRequired,
};

export default Header;
