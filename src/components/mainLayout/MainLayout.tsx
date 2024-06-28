/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { layoutWrapper, messagesPanel, chatPanel, directoryPanel } from './mainLayout.styles';
import Sidebar from '../sidebar/Sidebar';
import DirectoryPanel from '../directoryPanel/DirectoryPanel';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div css={layoutWrapper}>
      <Sidebar />
      <div css={messagesPanel}>
        {/* Содержимое MessagesPanel */}
      </div>
      <div css={chatPanel}>
        {children}
      </div>
      <DirectoryPanel />
    </div>
  );
};

export default MainLayout;
