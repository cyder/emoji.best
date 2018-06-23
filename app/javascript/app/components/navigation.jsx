import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.2rem;
  line-height: 3.6rem;
`;

const List = styled.ul`
  margin: 0 10px;
`;

const Item = styled.li`
  display: inline;
  margin: 0 10px;
`;

const Navigation = ({
  showSignInPopup,
  showSignUpPopup,
}) => (
  <Container>
    <List>
      <Item onClick={showSignInPopup}>Sign In</Item>
      <Item onClick={showSignUpPopup}>Sign Up</Item>
    </List>
  </Container>
);

Navigation.propTypes = {
  showSignInPopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
};

export default Navigation;
