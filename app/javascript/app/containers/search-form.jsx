import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as EmojisActions from '../actions/emojis';

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0 20px;
  height: 2.8rem;
  font-size: 1.2rem;
  border-radius: 1.4rem;
  border: solid 3px rgba(255, 255, 255, 0.3);
  background-clip: padding-box;
  color: #2d2d2d;
  box-sizing: border-box;
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
      this.props.pushUrl(this.state.keyword, this.props.order);
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

function mapStateToProps(state) {
  return {
    keyword: state.emojis.keyword,
    order: state.emojis.order,
  };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators(EmojisActions, dispatch);
}

const SearchFormContainer = connect(mapStateToProps, mapDispatchProps)(SearchForm);

SearchForm.propTypes = {
  keyword: PropTypes.string,
  order: PropTypes.string,
  pushUrl: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  keyword: null,
  order: null,
};

export default SearchFormContainer;
