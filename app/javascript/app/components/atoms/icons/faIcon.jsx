import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';

import * as Icon from '../../../constants/styles/icon';

const FaIcon = ({ icon }) => {
  const faIcon = (() => {
    switch (icon) {
      case Icon.DOWNLOAD:
        return faDownload;
      case Icon.TWITTER:
        return faTwitter;
      case Icon.FACEBOOK:
        return faFacebook;
      case Icon.GOOGLE:
        return faGoogle;
      default:
        return null;
    }
  })();

  return faIcon && <FontAwesomeIcon icon={faIcon} />;
};

FaIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default FaIcon;
