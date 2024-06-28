/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import Sidebar from '../sidebar/Sidebar';
import DirectoryPanel from '../directoryPanel/DirectoryPanel';

export const layoutWrapper = css`
  display: flex;
  width: 100%;
  height: 100vh;
`;

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div css={layoutWrapper}>
      <Sidebar />

      {/* <DirectoryPanel /> */}
    </div>
  );
};

export default MainLayout;
