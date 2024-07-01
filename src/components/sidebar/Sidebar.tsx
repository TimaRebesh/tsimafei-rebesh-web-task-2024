/** @jsxImportSource @emotion/react */
import { Icon } from '../../ui/Icon';
import { SidebarMenu } from './SidebarMenu';
import styled from '@emotion/styled';
import theme from '../../styles/theme';

const SidebarElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 24px;
  gap: 10px;
  width: 88px;
  height: 100%;

  // position: absolute;
  // left: 0px;
  // top: 0px;
  // background: ${theme.colors.background};
  // box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
`;

/* Sidebar */

/* Auto layout */
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// padding: 16px 16px 24px;
// gap: 10px;

// position: absolute;
// width: 88px;
// height: 1024px;
// left: 0px;
// top: 0px;

// background: #FFFFFF;
// box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);


export const Sidebar: React.FC = () => (
  <SidebarElement>
    <SidebarMenu />
    <Icon src='assets/icons/setting2.svg' />
  </SidebarElement>
);

