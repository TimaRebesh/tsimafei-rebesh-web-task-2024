import { css } from '@emotion/react';

export const messagePanelStyles = {
  panelContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 640px;
    height: 1024px;
    background: #ffffff;
  `,
  inputBox: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    gap: 24px;
    width: 640px;
    height: 96px;
    background: #f3f3f3;
  `,
};

export default messagePanelStyles;
