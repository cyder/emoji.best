
};

App.defaultProps = {
  popupManager: null,
};

export default AppContainer;

import PopupManager from '../components/popup-manager';
import * as EmojisActions from '../actions/emojis';
import * as PopupManagerActions from '../actions/popup-manager';
        <PopupManager
          show={this.props.popupManager}
          closePopup={this.props.closePopup}
          showSignInPopup={this.props.showSignInPopup}
          showSignUpPopup={this.props.showSignUpPopup}
        />
  return bindActionCreators({
    ...EmojisActions,
    ...PopupManagerActions,
  }, dispatch);
  emojis: PropTypes.shape(EmojiListShape).isRequired,
  popupManager: PropTypes.string,
  showSignInPopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
};

App.defaultProps = {
  popupManager: null,
};

export default AppContainer;
