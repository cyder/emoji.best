import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkButton = ({
  onClick,
  href,
  download,
  target,
  children,
}) => (
  <Wrapper
    onClick={onClick}
    download={download}
    target={target}
    href={href}
  >
    { children }
  </Wrapper>
);

const Wrapper = styled.a`
  display: block;
  text-align: center;
`;

LinkButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  href: PropTypes.string,
  download: PropTypes.bool,
  target: PropTypes.string,
};

LinkButton.defaultProps = {
  onClick: null,
  children: null,
  href: null,
  download: null,
  target: null,
};

export default LinkButton;
