import React from 'react';
import styled from 'styled-components';

const TextBalloon = (msg: any) => {
  console.log(msg);
  return (
    <Wrap>
      <Container key={msg.idx}>{msg.data}</Container>
    </Wrap>
  );
};

export default TextBalloon;

const Wrap = styled.div``;

const Container = styled.div`
  display: inline-block;
  border: 1px solid white;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  color: #333131;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
`;
