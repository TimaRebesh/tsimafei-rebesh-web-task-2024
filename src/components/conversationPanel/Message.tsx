/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { TransformedComments } from 'types/types';
import { Avatar } from 'ui/avatar';
import theme from 'styles/theme';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SingleMessage = styled.div<{ isRight: boolean; }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  border-radius: 12px;
  justify-content: ${props => (props.isRight ? 'flex-end' : 'flex-start')};
`;

const MessageContent = styled.div<{ isOwner: boolean; }>`
  background: ${props => (props.isOwner ? theme.colors.primary : '#f1f1f1')};
  border-radius: 12px;
  padding: 8px 16px;

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${props => (props.isOwner ? theme.colors.background : 'black')};
  }
`;

const AvatarWrapper = styled.div<{ isRight: boolean; }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isRight ? 'flex-end' : 'flex-start')};
  width: 48px;
  height: auto;
  min-height: 48px;
`;

export const Message = ({
  messageBlock
}: {
  messageBlock: TransformedComments;
}) => {
  const { isOwner, avatar, comments } = messageBlock;

  return (
    <MessageContainer>
      {comments.map((message, index) => (
        <SingleMessage key={message.id} isRight={isOwner}>
          <AvatarWrapper isRight={isOwner}>
            {!isOwner && index === 0 && <Avatar src={avatar} />}
          </AvatarWrapper>
          <MessageContent isOwner={isOwner}>
            <p>{message.text}</p>
          </MessageContent>
          <AvatarWrapper isRight={isOwner}>
            {isOwner && index === 0 && <Avatar src={avatar} />}
          </AvatarWrapper>
        </SingleMessage>
      ))}
    </MessageContainer>
  );
};
