import { SEND_COMMENT } from 'store/constants';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import theme from 'styles/theme';
import { Icon } from 'ui/Icon';
import { currentUser } from 'utils/mockData';

const MessageSenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 24px;
  width: 100%;
  height: 96px;
`;

const SenderInput = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  width: 100%;
  height: 48px;
  background: #FFFFFF;
  border: 2px solid #E2E8F0;
  border-radius: 12px;
`;

const MessageInput = styled.input`
  margin: 0 auto;
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  border: none;
  outline: none;
`;

export const MessageSender = () => {

  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const send = () => {
    if (text.trim()) {
      const userName = currentUser.name;
      dispatch({ type: SEND_COMMENT, payload: { name: userName, text } });
      setText('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      send();
    }
  };

  const clip = () => console.log('clip');

  return (
    <MessageSenderContainer>
      <Icon
        src='assets/icons/paperclip.svg'
        width={24}
        height={24}
        onClick={clip}
      />
      <SenderInput>
        <MessageInput
          type="text"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message"
        />
        <Icon
          src='assets/icons/send2.svg'
          onClick={send}
          backgroundColor={theme.colors.primary}
        />
      </SenderInput>
    </MessageSenderContainer>
  );
};
