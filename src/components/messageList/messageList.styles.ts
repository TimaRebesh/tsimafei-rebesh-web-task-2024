import { css } from '@emotion/react';

export const messageListStyles = css`
  flex-grow: 1;
  padding: 16px;
  overflow-y: auto;
`;

export const messageItemStyles = css`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  &:last-of-type {
    border-bottom: none;
  }
`;
