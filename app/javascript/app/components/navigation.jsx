import React from 'react';
import styled from 'styled-components';

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

const Navigation = () => (
  <Container>
    <List>
      <Item>Sign In</Item>
      <Item>Sign Up</Item>
    </List>
  </Container>
);

export default Navigation;
