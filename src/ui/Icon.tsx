/** @jsxImportSource @emotion/react */
import React from 'react';
import { css as emotionCss, SerializedStyles } from '@emotion/react';

interface IconProps {
  src: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  css?: SerializedStyles;
}

const Icon: React.FC<IconProps> = ({ src, width = '24px', height = '24px', onClick, css }) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      onClick={onClick}
      css={emotionCss`
        ${css}
      `}
      alt="icon"
    />
  );
};

export default Icon;
