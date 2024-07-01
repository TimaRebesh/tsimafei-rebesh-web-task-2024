/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { Sidebar } from '../sidebar/Sidebar';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import { Divider } from 'ui/divider';

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${theme.colors.background};
`;

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <Divider vertical />
      {children}
    </LayoutWrapper>
  );
};

export default MainLayout;
