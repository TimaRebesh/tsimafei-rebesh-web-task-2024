/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import Header from './header/Header';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import { Divider } from 'ui/divider';
import { MessagesHeader } from './MessagesHeader';
import { MessageList } from './MessagesList';

const MessagePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 349px;
  height: 100%;
  flex-shrink: 0;
`;

export const MessagesPanel: React.FC = () => {
  return (
    <MessagePanelContainer>
      <MessagesHeader />
      <Divider />
      <MessageList />
    </MessagePanelContainer>
  );
}
  ;

