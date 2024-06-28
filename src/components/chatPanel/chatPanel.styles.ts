import { css } from '@emotion/react';

export const chatPanelStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  width: 640px;
  height: 1024px;
  background: #ffffff;
`;

export const chatInputStyles = css`
  display: flex;
  width: 100%;
  padding: 16px;
  border-top: 1px solid #ddd;
  input {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 8px;
  }
`;

export const chatButtonStyles = css`
  padding: 8px 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
