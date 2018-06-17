import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from './search-form';

const Header = ({ searchEmojis }) => (
  <header>
    <h1>emoji.best</h1>
    <SearchForm searchEmojis={searchEmojis} />
  </header>
);

Header.propTypes = {
  searchEmojis: PropTypes.func.isRequired,
};

export default Header;
