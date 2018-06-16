import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: '' };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.searchEmojis(this.state.keyword);
    }
  }

  onChange(e) {
    this.setState({ keyword: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search emojis"
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          value={this.state.keyword}
        />
      </div>
    );
  }
}

SearchForm.propTypes = {
  searchEmojis: PropTypes.func.isRequired,
};

export default SearchForm;
