/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { Sidebar } from '../sidebar/Sidebar';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import { Separator } from 'ui/separator';

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
      <Separator vertical />
      {children}
    </LayoutWrapper>
  );
};

export default MainLayout;
