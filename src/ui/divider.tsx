/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface DividerProps {
  vertical?: boolean;
}

const DividerStyle = (vertical: boolean): SerializedStyles => css`
  ${vertical ? 'height: 100%; width: 1px;' : 'width: 100%; height: 1px;'};
  background: #000000;
  opacity: 0.08;
`;

export const Divider: React.FC<DividerProps> = ({ vertical = false }) => {
  return <div css={DividerStyle(vertical)} />;
};
