/** @jsxImportSource @emotion/react */
import { Icon } from '../../ui/Icon';
import { Menu } from './Menu';
import styled from '@emotion/styled';
import theme from '../../styles/theme';

const SidebarElement = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 24px;
  gap: 10px;
  height: 100%;
  background: ${theme.colors.background};
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
`;

const Sidebar: React.FC = () => (
  <SidebarElement>
    <Menu />
    <Icon src='assets/icons/setting2.svg' />
  </SidebarElement>
);

export default Sidebar;
