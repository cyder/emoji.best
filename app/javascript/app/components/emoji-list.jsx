import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LoadingImage from 'images/loading.png';
import EmptyImage from 'images/empty.png';

import Emoji from './emoji';
import EmojiListShape from './shapes/emoji-list';
import DownloadCartShape from './shapes/download-cart';

const Container = styled.section`
  padding: 0 2%;
  margin: 0 auto;
  max-width: 1000px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SelectContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    right: 15px;
    display: block;
    width: 10px;
    height: 10px;
    border-bottom: 4px solid #242424;
    border-right: 4px solid #242424;
    transform: rotate(45deg);
  }
`;

const Select = styled.select`
  background-color: #ffffff;
  border: none;
  height: 40px;
  border-radius: 20px;
  appearance: button;
  padding: 0 60px 0 20px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  color: #242424;

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #828c9a;
  }
`;

const Emojis = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px 5%;
  margin-bottom: 50px;
`;

const Loading = styled.div`
  display: ${props => (props.isShow ? 'block' : 'none')}
  text-align:center;
  margin: 20px 0;
`;

const LoadingIcon = styled.img`
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0%  {transform: rotate(0);}
    100%  {transform: rotate(360deg);}
  }
`;

const EmptyView = styled.div`
  display: ${props => (props.isShow ? 'block' : 'none')}
  text-align: center;
`;

const EmptyMessage = styled.h2`
  font-size: 2rem;
`;

const isAddedToCart = (cartList, emoji) => (
  cartList.some(value => value.id === emoji.id)
);

const EmojiList = ({
  emojis,
  cart,
  searchEmojis,
  addEmojiToDownloadCart,
  deleteEmojiFromDownloadCart,
}) => (
  <Container>
    <Head>
      <h2>
        {(emojis.keyword == null || emojis.keyword === '') ?
          'All Emojis' :
          `Search results : ${emojis.keyword}`}
      </h2>
      <SelectContainer>
        <Select onChange={e => searchEmojis(emojis.keyword, e.target.value)}>
          <option value="new">New</option>
          <option value="popular">Popular</option>
        </Select>
      </SelectContainer>
    </Head>
    <Emojis>
      {
        emojis.list.map(emoji => (
          <Emoji
            key={emoji.id}
            emoji={emoji}
            isAddedToCart={isAddedToCart(cart.list, emoji)}
            addEmojiToDownloadCart={addEmojiToDownloadCart}
            deleteEmojiFromDownloadCart={deleteEmojiFromDownloadCart}
          />
        ))
      }
    </Emojis>
    <Loading isShow={emojis.status === 'loading'}>
      <LoadingIcon alt="loading" src={LoadingImage} />
    </Loading>
    <EmptyView isShow={emojis.list.length === 0 && emojis.status !== 'loading'}>
      <img alt="No Result found" src={EmptyImage} />
      <EmptyMessage>Oops! No Result found.</EmptyMessage>
    </EmptyView>
  </Container>
);

EmojiList.propTypes = {
  emojis: EmojiListShape.isRequired,
  cart: DownloadCartShape.isRequired,
  searchEmojis: PropTypes.func.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
};

export default EmojiList;
