import React from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import theme from './styles/theme';
import globalStyles from './styles/global';
import MainLayout from './components/mainLayout/MainLayout';
import ChatPanel from './components/chatPanel/ChatPanel';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <MainLayout>
        <ChatPanel />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
