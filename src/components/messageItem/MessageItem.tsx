/** @jsxImportSource @emotion/react */
import React from 'react';
import { messageItemStyles } from './messageItem.styles';

interface MessageItemProps {
  content: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ content }) => {
  return <div css={messageItemStyles}>{content}</div>;
};

export default MessageItem;
