/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const AvatarContainer = styled.div<{ size: number; src?: string; }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ src }) => (src ? 'none' : '#d8d8d8')};
  border-radius: 12px;
  overflow: hidden;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  flex-shrink: 0;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Avatar = ({
  src,
  size = 48,
  className,
  containerStyles = {},
  imgStyles = {}
}: {
  src?: string;
  size?: number;
  className?: string;
  containerStyles?: object;
  imgStyles?: object;
}) => {
  return (
    <AvatarContainer size={size} src={src} className={className} style={containerStyles}>
      {src && <Image src={src} alt="Avatar" style={imgStyles} />}
    </AvatarContainer>
  );
};

