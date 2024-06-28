/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import messagePanelStyles from './messagesPanel.styles';
import Header from '../header/Header';


const MessagePanel: React.FC = () => {
  return (
    <div css={messagePanelStyles.panelContainer}>
      <Header />
      <div css={messagePanelStyles.inputBox}>
        <input type="text" placeholder="Type a message" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default MessagePanel;
;
