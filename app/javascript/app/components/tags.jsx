import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTag from '@fortawesome/fontawesome-free-solid/faTag';
import PropTypes from 'prop-types';


const TagTitle = styled.h3`
  color: #464646;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`;

const Tag = styled.div`
  position: relative;
  text-align: center;
  border: solid 2px #242424;
  padding: 0 24px;
  line-height: 1.6rem;
  border-radius: 0.8rem;
`;

const TagIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 6px;
  height: 1.6rem;
  margin: auto;
`;

class Tags extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(tag) {
    const params = new URLSearchParams({
      keyword: tag.name,
      target: 'tag',
    });
    this.props.push(`/?${params.toString()}`);
  }

  render() {
    return (
      <div>
        <TagTitle>Tag</TagTitle>
        <List>
          {
            this.props.tags.map(tag => (
              <Tag key={tag.name} onClick={() => this.onClick(tag)}>
                { tag.name }
                <TagIcon><FontAwesomeIcon icon={faTag} /></TagIcon>
              </Tag>
            ))
          }
        </List>
      </div>
    );
  }
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  push: PropTypes.func.isRequired,
};

export default Tags;
