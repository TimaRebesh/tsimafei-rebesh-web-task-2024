/** @jsxImportSource @emotion/react */
import React, { ReactNode, useEffect, useState } from 'react';
import { chatPanelStyles, chatInputStyles, chatButtonStyles } from './chatPanel.styles';
import { MessagesPanel } from '../messagesPanel/MessagePanel';
import { Divider } from 'ui/divider';
import { css } from '@emotion/react';
import { ConversationPanel } from '../conversationPanel/ConversationPanel';
import { Message } from 'types/types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from 'store/actions/chatActions';
import { RootState } from 'store/reducers/rootReducer';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const NoneConversation = styled.div`
background-color: ${theme.colors.secondary};
width: 100%;
`;


const ChatPanel: React.FC = () => {

  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.chat.messages);
  const selectedMessage = useSelector((state: RootState) => state.selectedMessage.selectedMessage);
  console.log(selectedMessage);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);


  return (
    <>
      <MessagesPanel />
      <Divider vertical />
      {selectedMessage
        ? <ConversationPanel messages={messages} />
        : <NoneConversation />
      }
      <Divider vertical />
      {/* <MessageList messages={messages} />
      <div css={chatInputStyles}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <button css={chatButtonStyles} onClick={handleSendMessage}>Отправить</button>
      </div> */}
    </>
  );
};

export default ChatPanel;
