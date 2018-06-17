import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from './search-form';

const Header = ({ order, searchEmojis }) => (
  <header>
    <h1>emoji.best</h1>
    <SearchForm
      order={order}
      searchEmojis={searchEmojis}
    />
  </header>
);

Header.propTypes = {
  order: PropTypes.string.isRequired,
  searchEmojis: PropTypes.func.isRequired,
};

export default Header;
