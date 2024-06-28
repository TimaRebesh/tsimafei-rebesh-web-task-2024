import { css } from '@emotion/react';

export const directoryPanelStyles = css`
  width: 362px;
  background: #f9f9f9;
  padding: 16px;
  box-shadow: 1px 0px 12px rgba(0, 0, 0, 0.1);
  h2 {
    margin-bottom: 16px;
    color: #333;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
    &:last-of-type {
      border-bottom: none;
    }
  }
`;
