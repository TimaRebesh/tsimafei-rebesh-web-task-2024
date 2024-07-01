/** @jsxImportSource @emotion/react */
import { Sidebar } from '../sidebar/Sidebar';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import { Divider } from 'ui/divider';
import ChatPanel from '../chatPanel/ChatPanel';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers/rootReducer';

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${theme.colors.background};
`;

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  color: #999;
`;

const MainLayout: React.FC = () => {

  const selectedItemId = useSelector((state: RootState) => state.menu.selectedItemId);

  const renderContent = () => {
    switch (selectedItemId) {
      case '100':
        return <Placeholder>Home Component</Placeholder>;
      case '200':
        return <ChatPanel />;
      case '300':
        return <Placeholder>Chart Component</Placeholder>;
      case '400':
        return <Placeholder>Search Component</Placeholder>;
      case '500':
        return <Placeholder>Calendar Component</Placeholder>;
      default:
        return <Placeholder>Select a menu item</Placeholder>;
    }
  };

  return (
    <LayoutWrapper>
      <Sidebar />
      <Divider vertical />
      {renderContent()}
    </LayoutWrapper>
  );
};

export default MainLayout;
