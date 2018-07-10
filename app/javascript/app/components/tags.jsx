import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTag from '@fortawesome/fontawesome-free-solid/faTag';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import PropTypes from 'prop-types';

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagTitle = styled.h3`
  color: #464646;
`;

const EditButton = styled.button`
  border: none;
  background-color: #464646;
  color: #ffffff;
  line-height: 1rem;
  border-radius: 0.9rem;
  padding: 0.3rem 15px 0.5rem 10px;
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
  border: solid 2px ${props => (props.isEditing ? '#b7b7b7;' : '#242424')};
  padding: 0 24px;
  line-height: 1.6rem;
  border-radius: 0.8rem;
  ${props => (props.isEditing ? 'color: #b7b7b7;' : null)};
`;

const TagIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 6px;
  height: 1.6rem;
  margin: auto;
`;

const DeleteButton = styled.button`
  display: ${props => (props.isEditing ? 'block' : 'none')};
  border: none;
  background: transparent;
  width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 6px;
  height: 1.6rem;
  margin: auto;
`;

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(tag) {
    if (!this.state.isEditing) {
      const params = new URLSearchParams({
        keyword: tag.name,
        target: 'tag',
      });
      this.props.push(`/?${params.toString()}`);
    }
  }

  render() {
    const { isEditing } = this.state;
    const { tags, deleteTag, accessToken } = this.props;

    return (
      <div>
        <TitleArea>
          <TagTitle>Tag</TagTitle>
          <EditButton onClick={() => this.setState({ isEditing: !isEditing })}>
            <FontAwesomeIcon icon={faPencilAlt} />
            { isEditing ? ' complete' : ' edit tag' }
          </EditButton>
        </TitleArea>
        <List>
          {
            tags.map(tag => (
              <Tag
                key={tag.id}
                onClick={() => this.onClick(tag)}
                isEditing={isEditing}
              >
                { tag.name }
                <TagIcon><FontAwesomeIcon icon={faTag} /></TagIcon>
                <DeleteButton
                  isEditing={isEditing}
                  onClick={() => deleteTag(tag.id, accessToken)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </DeleteButton>
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  push: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  accessToken: PropTypes.string,
};

Tags.defaultProps = {
  accessToken: undefined,
};

export default Tags;
