import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';

import { DARK, GRAY_ALPHA, WHITE } from '../../../constants/styles/color';
import { DOWNLOAD } from '../../../constants/styles/icon';


const FillButton = ({
  onClick,
  backgroundColor,
  label,
  href,
  target,
  download,
  icon,
}) => {
  const faIcon = (() => {
    switch (icon) {
      case DOWNLOAD:
        return faDownload;
      default:
        return null;
    }
  })();

  return (
    <Wrapper backgroundColor={backgroundColor}>
      {
        href ? (
          <LinkButton
            onClick={onClick}
            download={download}
            target={target}
            href={href}
          >
            {label}
          </LinkButton>
        ) : (
          <Button onClick={onClick}>
            {label}
          </Button>
          )
      }
      {faIcon && (
        <IconWrapper>
          <FontAwesomeIcon icon={faIcon} />
        </IconWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: ${WHITE};
  border-radius: 1000px;
  background-color: ${props => (props.backgroundColor)};
  font-size: 1.1rem;
  line-height: 2.6rem;
  font-weight: bold;
  border: solid 3px ${GRAY_ALPHA};
  box-sizing: border-box;
  cursor: pointer;
`;

const LinkButton = styled.a`
  display: block;
  text-align: center;
`;

const Button = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  width: 100%;
  color: inherit;
  line-height: inherit;
  cursor: inherit;
  text-align: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
`;

FillButton.propTypes = {
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  download: PropTypes.bool,
  icon: PropTypes.string,
};

FillButton.defaultProps = {
  onClick: null,
  backgroundColor: DARK,
  href: null,
  target: null,
  download: false,
  icon: null,
};

export default FillButton;
