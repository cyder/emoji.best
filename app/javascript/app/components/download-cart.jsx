import React from 'react';
import PropTypes from 'prop-types';

import DownloadCartShape from './shapes/donwload-cart';

const DwonloadCart = ({ list, deleteEmojiFromDownloadCart }) => (
  <section>
    <div>
      {
        list.map(emoji => (
          <div key={emoji.id}>
            <img alt={emoji.name} src={emoji.images.thumb_url} />
            <button onClick={() => deleteEmojiFromDownloadCart(emoji)}>Delete</button>
          </div>
        ))
      }
    </div>
    <p>choose {list.length} emojis</p>
    <button>Download</button>
  </section>
);

export default DwonloadCart;

DwonloadCart.propTypes = {
  list: DownloadCartShape.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
};
