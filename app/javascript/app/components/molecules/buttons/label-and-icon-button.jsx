import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { WHITE } from '../../../constants/styles/color';
import FillButton from '../../atoms/buttons/fill-button';
import FaIcon from '../../atoms/icons/faIcon';

const LabelAndIconButton = ({
  label,
  icon,
  onClick,
  backgroundColor,
  href,
  target,
  download,
}) => (
  <Wrapper>
    <FillButton
      onClick={onClick}
      href={href}
      backgroundColor={backgroundColor}
      target={target}
      download={download}
    >
      { label }
    </FillButton>
    {
      icon && (
        <IconWrapper>
          <FaIcon icon={icon} />
        </IconWrapper>
      )
    }
  </Wrapper>
);

const Wrapper = styled.div`
  color: ${WHITE};
  position: relative;
`;

const IconWrapper = styled.div`
  font-size: 1.3rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  display: flex;
  align-items: center;
  margin: auto;
`;

LabelAndIconButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  download: PropTypes.bool,
};

LabelAndIconButton.defaultProps = {
  icon: undefined,
  onClick: undefined,
  backgroundColor: undefined,
  href: undefined,
  target: undefined,
  download: undefined,
};

export default LabelAndIconButton;
