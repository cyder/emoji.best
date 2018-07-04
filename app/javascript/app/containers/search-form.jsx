import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addUrlProps, UrlQueryParamTypes, UrlUpdateTypes } from 'react-url-query';

import * as EmojisActions from '../actions/emojis';

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
    this.state = { keyword: props.keyword || '' };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state.keyword = nextProps.keyword || '';
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.onChangeKeyword(this.state.keyword);
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

function mapDispatchProps(dispatch) {
  return bindActionCreators(EmojisActions, dispatch);
}

const urlPropsQueryConfig = {
  keyword: { type: UrlQueryParamTypes.string, updateType: UrlUpdateTypes.pushIn },
};

const SearchFormContainer = addUrlProps({
  urlPropsQueryConfig,
})(connect(null, mapDispatchProps)(SearchForm));

SearchForm.propTypes = {
  keyword: PropTypes.string,
  onChangeKeyword: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  keyword: null,
};

export default SearchFormContainer;
