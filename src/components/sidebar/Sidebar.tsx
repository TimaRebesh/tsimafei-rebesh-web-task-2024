/** @jsxImportSource @emotion/react */
import { Icon } from '../../ui/Icon';
import { SidebarMenu } from './SidebarMenu';
import styled from '@emotion/styled';

const SidebarElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 24px;
  gap: 10px;
  width: 88px;
  height: 100%;
`;

export const Sidebar: React.FC = () => (
  <SidebarElement>
    <SidebarMenu />
    <Icon src='assets/icons/setting2.svg' />
  </SidebarElement>
);

