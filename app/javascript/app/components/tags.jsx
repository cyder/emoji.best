import React from 'react';
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

const Tags = ({ tags }) => (
  <div>
    <TagTitle>Tag</TagTitle>
    <List>
      {
        tags.map(tag => (
          <Tag key={tag.name}>
            { tag.name }
            <TagIcon><FontAwesomeIcon icon={faTag} /></TagIcon>
          </Tag>
        ))
      }
    </List>
  </div>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Tags;
