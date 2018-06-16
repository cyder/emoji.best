import React from 'react';
import PropTypes from 'prop-types';

import DownloadCartShape from './shapes/donwload-cart';

const DwonloadCart = ({ list, deleteEmojiFromDownloadCart }) => (
  <div>
    {
      list.map(emoji => (
        <p>{emoji.name}</p>
      ))
    }
  </div>
);

export default DwonloadCart;

DwonloadCart.propTypes = {
  list: DownloadCartShape.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
};
