import React from 'react';
import { Route } from 'react-router-dom';

import MainContent from '../containers/main-content';
import PopupManager from '../containers/popup-manager';
import EmojiDetailPopup from '../containers/emoji-detail-popup';

const App = () => (
  <div>
    <MainContent />
    <PopupManager />
    <Route path="/emoji/:id" component={EmojiDetailPopup} />
  </div>
);

export default App;
