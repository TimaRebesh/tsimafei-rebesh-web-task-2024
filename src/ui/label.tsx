import React from 'react';
import styled from '@emotion/styled';

interface LabelProps {
  type: 'default' | 'help' | 'question';
  text: string;
}

const Label = styled.div<{ type: string; }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2px 8px;
  gap: 10px;
  border-radius: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  ${({ type }) => {
    switch (type) {
      case 'help':
        return `
          background: #C6F6D5;
          color: #38A169;
        `;
      case 'question':
        return `
          background: #FEEBC8;
          color: #DD6B20;
        `;
      default:
        return `
          border: 1px solid #CBD5E0;
          color: #718096;
        `;
    }
  }}
`;

const Title = styled.span`
  height: 18px;
`;

export const CustomLabel: React.FC<LabelProps> = ({ type, text }) => {
  return (
    <Label type={type}>
      <Title>{text}</Title>
    </Label>
  );
};