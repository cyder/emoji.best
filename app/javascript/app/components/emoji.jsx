import React from 'react';
import styled from 'styled-components';

import EmojiShape from './shapes/emoji';

const Container = styled.article`
  margin-bottom: 30px;
  padding: 10px 15px;
  width: 28%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 0 0 #e7e7e7;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #eeeeee;
`;

const Title = styled.h1`
  margin-left: 5px;
  font-size: 1.2rem;
`;

const Name = styled.span`
  padding: 0 5px 0;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Menus = styled.div`
  padding-top: 10px;
  color: #909090;
  display: flex;
  justify-content: space-between;
`;

const Emoji = emoji => (
  <Container>
    <TitleArea>
      <Img alt={emoji.name} src={emoji.images.thumb_url} />
      <Title>:<Name>{emoji.name}</Name>:</Title>
    </TitleArea>
    <Menus>
      <div>by {emoji.user.name}</div>
      <div>{emoji.number_of_downloaded} Download</div>
    </Menus>
  </Container>
);

Emoji.propTypes = EmojiShape;

export default Emoji;
