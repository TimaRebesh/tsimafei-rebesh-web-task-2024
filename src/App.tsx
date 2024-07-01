import React from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import theme from './styles/theme';
import globalStyles from './styles/global';
import MainLayout from './components/mainLayout/MainLayout';
import ChatPanel from './components/chatPanel/ChatPanel';
import { Provider } from 'react-redux';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <MainLayout>
          <ChatPanel />
        </MainLayout>
      </ThemeProvider>
    </Provider>

  );
};

export default App;
