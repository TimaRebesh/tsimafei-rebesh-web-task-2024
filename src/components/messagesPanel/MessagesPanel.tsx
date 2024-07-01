/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import messagePanelStyles from './messagesPanel.styles';
import Header from './header/Header';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import { Separator } from 'ui/separator';
import { MessagesHeader } from './MessagesHeader';

const MessagePanelEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;


  width: 349px;
  height: 100%;
  
  `;

export const MessagesPanel: React.FC = () => {
  return (
    <MessagePanelEl>
      <MessagesHeader />
      <Separator />
      <div css={css`height: 10px`}>пудд</div>
    </MessagePanelEl>
  );
}
  ;
