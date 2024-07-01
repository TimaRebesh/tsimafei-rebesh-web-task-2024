/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface SeparatorProps {
  vertical?: boolean;
}

const separatorStyle = (vertical: boolean): SerializedStyles => css`
  box-shadow: ${vertical ? '1px 0px 0px rgba(0, 0, 0, 0.08)' : '0px 1px 0px rgba(0, 0, 0, 0.08)'};
  ${vertical ? 'height: 100%; width: 1px;' : 'width: 100%; height: 1px;'}
`;

export const Separator: React.FC<SeparatorProps> = ({ vertical = false }) => {
  return <div css={separatorStyle(vertical)} />;
};

