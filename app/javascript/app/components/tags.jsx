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
  display: ${props => (props.isShow ? 'block' : 'none')};
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

const AddForm = styled.div`
  display: ${props => (props.isEditing ? 'block' : 'none')};
  height: 30px;
  margin: 10px 0;
`;

const AddInput = styled.input`
  background-color: #f5f5f5;
  border: none;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  padding: 0 10px 0 15px;
`;

const AddButton = styled.button`
  border: none;
  background-color: #464646;
  color: #ffffff;
  height: 100%;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  padding: 0 15px 0 10px;
`;

const ErrorMessage = styled.span`
  margin-left: 10px;
  color: #d32f2f;
`;

const EmptyMessage = styled.p`
  display: ${props => (props.isEmpty ? 'block' : 'none')};
  margin-top: 0;
`;

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      newTagName: '',
      errorMessage: '',
    };

    this.onClick = this.onClick.bind(this);
    this.onClickAddTagButton = this.onClickAddTagButton.bind(this);
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

  onClickAddTagButton() {
    const { newTagName } = this.state;
    if (newTagName === '') {
      this.setState({ errorMessage: 'Please enter a Tag name.' });
    } else {
      const { addTag, emoji, accessToken } = this.props;
      addTag(emoji.id, this.state.newTagName, accessToken);
      this.setState({ newTagName: '' });
      this.setState({ errorMessage: '' });
    }
  }

  render() {
    const { isEditing, newTagName, errorMessage } = this.state;
    const {
      emoji,
      deleteTag,
      accessToken,
    } = this.props;

    return (
      <div>
        <TitleArea>
          <TagTitle>Tag</TagTitle>
          <EditButton
            isShow={accessToken !== null}
            onClick={() => this.setState({ isEditing: !isEditing })}
          >
            <FontAwesomeIcon icon={faPencilAlt} />
            { isEditing ? ' complete' : ' edit tag' }
          </EditButton>
        </TitleArea>
        <List>
          {
            emoji.tags.map(tag => (
              <Tag
                key={tag.id}
                onClick={() => this.onClick(tag)}
                isEditing={isEditing}
              >
                { tag.name }
                <TagIcon><FontAwesomeIcon icon={faTag} /></TagIcon>
                <DeleteButton
                  isEditing={isEditing}
                  onClick={() => deleteTag(emoji.id, tag.id, accessToken)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </DeleteButton>
              </Tag>
            ))
          }
        </List>
        <EmptyMessage
          isEmpty={emoji.tags.length === 0}
        >
          Still Empty.
        </EmptyMessage>
        <AddForm isEditing={isEditing}>
          <AddInput
            type="text"
            placeholder="new tag"
            onChange={e => this.setState({ newTagName: e.target.value })}
            value={newTagName}
          />
          <AddButton onClick={this.onClickAddTagButton}>
            add
          </AddButton>
          <ErrorMessage>{ errorMessage }</ErrorMessage>
        </AddForm>
      </div>
    );
  }
}

Tags.propTypes = {
  emoji: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
  push: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  accessToken: PropTypes.string,
};

Tags.defaultProps = {
  accessToken: null,
};

export default Tags;
