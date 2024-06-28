/** @jsxImportSource @emotion/react */
import React from 'react';
import { messageListStyles, messageItemStyles } from './messageList.styles';

interface Message {
  id: number;
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div css={messageListStyles}>
      {messages.map((message) => (
        <div key={message.id} css={messageItemStyles}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;

