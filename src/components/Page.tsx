import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import styled from 'styled-components';
import TextBalloon from './TextBalloon';

const Page = () => {
  const [msg, setMsg] = useState<any>({
    x: '',
    y: [],
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMsg({...msg, x: e.target.value});
    console.log(msg);
  };

  const onSend = () => {
    setMsg({...msg, x: '', y: msg.y.concat(msg.x)});
    console.log(msg);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <Wrap>
      <Container>
        <TitleArea>안녕하세요</TitleArea>
        <TextArea>
          {msg.y &&
            msg.y.map((data: any, idx: any) => {
              return <TextBalloon data={data} idx={idx} />;
            })}
        </TextArea>
        <InputArea>
          <InputText
            onChange={onChange}
            onKeyUp={handleKeyPress}
            value={msg.x}
          ></InputText>
          <TextBtn onClick={onSend}>Send</TextBtn>
        </InputArea>
      </Container>
    </Wrap>
  );
};

export default Page;

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  min-width: 500px;
  height: 70%;
  border: 1px solid black;
  margin: 0 auto;
`;
const TitleArea = styled.div`
  text-align: center;
  margin: auto 0;
`;

const TextArea = styled.div`
  height: 65%;
  width: 80%;
  margin: 0 auto;
  border: 0.5px solid black;
  overflow: scroll;
`;
const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`;

const InputText = styled.input`
  width: 70%;
  height: 40%;
`;

const TextBtn = styled.button`
  height: 50%;
`;
