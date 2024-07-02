/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 24px;
  gap: 10px;
  width: 100%;
  height: 72px;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  width: 100%;
  height: 48px;
  background: #F3F3F3;
  border-radius: 12px;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
  opacity: 0.4;
  border: none;
  outline: none;
  background: transparent;
`;

const SearchLabel = styled.div`
  width: 45px;
  height: 17px;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.4;
`;

export const MessagesSearch: React.FC = () => {
  return (
    <Block>
      <Container>
        <SearchLabel>search</SearchLabel>
        <SearchInput placeholder="Search messages" />
      </Container>
    </Block>
  );
};

