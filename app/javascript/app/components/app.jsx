import React from 'react';
import { Route } from 'react-router-dom';

import MainContent from '../containers/main-content';
import PopupManager from '../containers/popup-manager';
import EmojiDetail from '../containers/emoji-detail';

const App = () => (
  <div>
    <MainContent />
    <PopupManager />
    <Route path="/emoji/:id" component={EmojiDetail} />
  </div>
);

export default App;
