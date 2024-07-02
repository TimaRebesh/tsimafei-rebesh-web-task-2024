import theme from 'styles/theme';
import { css } from '@emotion/react';

const headerStyles = {
  headerContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    width: 640px;
    height: 80px;
  `,
  userContent: css`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  avatar: css`
    width: 40px;
    height: 40px;
    border-radius: 10px;
  `,
  userName: css`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #000000;
  `,
  userStatus: css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: #000000;
    opacity: 0.6;
  `,
  statusDot: css`
    width: 10px;
    height: 10px;
    background: ${theme.colors.success};
    border-radius: 50%;
  `,
  callButton: css`
    display: flex;
    align-items: center;
    padding: 10px 16px;
    background: rgba(97, 94, 240, 0.1);
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #615ef0;
  `,
};

export default headerStyles;
