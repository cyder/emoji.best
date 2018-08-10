import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBackImage from 'images/header-back.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

const normalHeaderHeight = 310;
const smallHeaderHeight = 77;

const Container = styled.header`
  display: ${props => (props.isSmall ? 'flex' : 'block')};
  color: #ffffff;
  background-color: #2d2d2d;
  background-image:  ${props => (props.isSmall ? 'none' : `url(${HeaderBackImage})`)};
  background-position: center;
  background-size: cover;
  padding: ${props => (props.isSmall ? '0' : '60px 5% 0')};
  height: ${props => (props.isSmall ? smallHeaderHeight : normalHeaderHeight)}px;
  position: ${props => (props.isSmall ? 'fixed' : 'relative')};
  box-sizing: border-box;
  ${props => (props.isSmall ? `
    width: 100%;
    z-index: 10;
    align-items: center;
  ` : null)};
`;

const Title = styled.div`
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
  height: ${(props) => {
    if (props.isSmall) {
      return props.isLarge ? normalHeaderHeight : smallHeaderHeight;
    }
    return '0';
  }}px;
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
    this.state = {
      logoImage: selectLogoImage(),
      isSmall: false,
      isLargeSpace: true,
    };

    this.onScroll = this.onScroll.bind(this);
    this.checkHeader = this.checkHeader.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.checkHeader(this.props.keyword);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.keyword !== nextProps.keyword) {
      this.checkHeader(nextProps.keyword);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    this.checkHeader(this.props.keyword);
  }

  checkHeader(keyword) {
    const { body } = window.document;
    const html = window.document.documentElement;
    const scrollTop = body.scrollTop || html.scrollTop;

    if (keyword !== null && keyword !== '') {
      this.setState({ isSmall: true });
      this.setState({ isLargeSpace: false });
    } else if (scrollTop > normalHeaderHeight) {
      this.setState({ isSmall: true });
      this.setState({ isLargeSpace: true });
    } else {
      this.setState({ isSmall: false });
    }
  }

  render() {
    const { isSmall, isLargeSpace } = this.state;

    return (
      <div>
        <Container isSmall={isSmall} >
          <Title>
            <Link to="/">
              <Logo alt="emoji.best" src={this.state.logoImage} isSmall={isSmall} />
            </Link>
          </Title>
          <SubTitle isSmall={isSmall} >{'Let\'s share custom emojis!!'}</SubTitle>
          <SearchFormArea isSmall={isSmall} >
            <SearchForm />
          </SearchFormArea>
          <NavigationArea isSmall={isSmall}>
            <Navigation />
          </NavigationArea>
        </Container>
        <Background isSmall={isSmall} isLarge={isLargeSpace} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    keyword: state.emojis.keyword,
  };
}

const HeaderContainer = connect(mapStateToProps)(Header);

Header.propTypes = {
  keyword: PropTypes.string,
};

Header.defaultProps = {
  keyword: null,
};

export default HeaderContainer;
