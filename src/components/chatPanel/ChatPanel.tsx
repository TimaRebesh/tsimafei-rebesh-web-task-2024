/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from 'react';
import { chatPanelStyles, chatInputStyles, chatButtonStyles } from './chatPanel.styles';
import { MessagesPanel } from '../messagesPanel/MessagePanel';
import { Divider } from 'ui/divider';
import { css } from '@emotion/react';
import { ConversationPanel } from '../conversationPanel/ConversationPanel';
import { Message } from '@/types/types';

interface ChatPanelProps {

}


const messages: Message[] = [
  {
    name: 'Tim',
    text: 'Hello',
    id: 'b40ce360-1af4-4df0-8b2d-d29b0865f15e',
    dateAdded: 1573961291493,
    dateEdited: 1574224441310,
  },
  // Add other messages here...
];

const ChatPanel: React.FC<ChatPanelProps> = () => {


  return (
    <>
      <MessagesPanel />
      <Divider vertical />
      <ConversationPanel messages={messages} />
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
