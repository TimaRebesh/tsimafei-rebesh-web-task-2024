/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import theme from '../styles/theme';

interface IconProps {
  src: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  selected?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  src,
  width = '24px',
  height = '24px',
  onClick,
  selected = false
}) => {
  const iconStyles = (selected: boolean): SerializedStyles => css`
    background-color: ${selected ? theme.colors.primary : 'black'};
    -webkit-mask: url(${src}) no-repeat center;
    mask: url(${src}) no-repeat center;
    width: ${width};
    height: ${height};
    cursor: pointer;
  `;

  return (
    <div css={iconStyles(selected)} onClick={onClick} />
  );
};
