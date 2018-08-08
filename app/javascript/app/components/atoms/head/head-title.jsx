import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const HeadTitle = ({ pageTitle }) => {
  const prefix = pageTitle ? `${pageTitle} | ` : '';
  const siteTitle = 'emoji.best - Let\'s share emojis!!';
  const title = `${prefix}${siteTitle}`;

  return (
    <Helmet>
      <title>{ title }</title>
    </Helmet>
  );
};

HeadTitle.propTypes = {
  pageTitle: PropTypes.string,
};

HeadTitle.defaultProps = {
  pageTitle: undefined,
};

export default HeadTitle;
