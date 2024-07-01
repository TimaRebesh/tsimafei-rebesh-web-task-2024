/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface IconProps {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  styles?: SerializedStyles;
  backgroundColor?: string;
}

export const Icon: React.FC<IconProps> = ({
  src,
  width = 24,
  height = 24,
  onClick,
  styles,
  backgroundColor = 'black',
}) => {
  const iconStyles = css`
  mask-image: url(${src});
    width: ${width}px;
    height: ${height}px;
    background-color: ${backgroundColor}; 
    cursor: pointer;
    mask-size: cover;
    ${styles}
  `;

  return <div css={iconStyles} onClick={onClick} />;
};
