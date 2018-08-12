import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { DARK, GRAY_ALPHA, WHITE } from '../../../constants/styles/color';
import Button from './button';
import LinkButton from './link-button';


const FillButton = ({
  children,
  onClick,
  backgroundColor,
  href,
  target,
  download,
}) => (
  <Wrapper backgroundColor={backgroundColor}>
    {
      href ? (
        <LinkButton
          onClick={onClick}
          download={download}
          target={target}
          href={href}
        >
          { children }
        </LinkButton>
      ) : (
        <Button onClick={onClick}>
          { children }
        </Button>
      )
    }
  </Wrapper>
);

const Wrapper = styled.div`
  color: ${WHITE};
  border-radius: 1000px;
  background-color: ${props => (props.backgroundColor)};
  font-size: 1.1rem;
  line-height: 2.6rem;
  font-weight: bold;
  border: solid 3px ${GRAY_ALPHA};
  cursor: pointer;
`;

FillButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  download: PropTypes.bool,
};

FillButton.defaultProps = {
  onClick: undefined,
  backgroundColor: DARK,
  href: undefined,
  target: undefined,
  download: undefined,
  children: undefined,
};

export default FillButton;
