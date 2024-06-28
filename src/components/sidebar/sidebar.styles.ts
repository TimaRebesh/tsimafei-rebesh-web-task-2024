import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const sidebarStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 24px;
  gap: 10px;

  position: absolute;
  width: 88px;
  height: 1024px;
  left: 0px;
  top: 0px;

  background: ${theme.colors.background};
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
`;

export const logoStyles = css`
  position: relative;
  width: 56px;
  height: 56px;
  background: ${theme.colors.primary};
  border-radius: 14px;
  cursor: pointer;

  &::after {
    content: 'Q';
    position: absolute;
    width: 15.75px;
    height: 31.5px;
    left: 20.12px;
    top: 12.25px;
    font-family: ${theme.fonts.secondary};
    font-weight: 700;
    font-size: 21px;
    line-height: 150%;
    color: #ffffff;
  }
`;

export const iconContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 24px;
  height: 248px;
`;
