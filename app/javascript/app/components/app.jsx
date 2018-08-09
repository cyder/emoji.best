import React from 'react';
import { Route } from 'react-router-dom';

import MainContent from '../containers/main-content';
import EmojiDetailPopup from '../containers/emoji-detail-popup';
import SignInPopup from '../containers/sign-in-popup';
import SignUpPopup from '../containers/sign-up-popup';
import UploadPopup from '../containers/upload-popup';
import HeadTitle from './atoms/head/head-title';

const App = () => (
  <div>
    <HeadTitle />
    <MainContent />
    <Route path="/emoji/:id" component={EmojiDetailPopup} />
    <Route path="/signin" component={SignInPopup} />
    <Route path="/signup" component={SignUpPopup} />
    <Route path="/upload" component={UploadPopup} />
  </div>
);

export default App;
