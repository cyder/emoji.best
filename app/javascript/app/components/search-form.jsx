import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  height: 2.6rem;
  font-size: 1.2rem;
  border-radius: 1.3rem;
  border: solid 3px rgba(255, 255, 255, 0.3);
  background-clip: padding-box;
  color: #2d2d2d;
`;

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: '' };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.searchEmojis(this.state.keyword, this.props.order);
    }
  }

  onChange(e) {
    this.setState({ keyword: e.target.value });
  }

  render() {
    return (
      <Input
        type="text"
        placeholder="search emojis"
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
        value={this.state.keyword}
      />
    );
  }
}

SearchForm.propTypes = {
  order: PropTypes.string.isRequired,
  searchEmojis: PropTypes.func.isRequired,
};

export default SearchForm;
