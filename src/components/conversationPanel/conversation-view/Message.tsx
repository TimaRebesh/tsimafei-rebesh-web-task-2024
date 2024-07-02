/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TransformedComments } from 'types/types';
import { Avatar } from 'ui/avatar';
import theme from 'styles/theme';
import { Control } from './Control';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';

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
  position: relative;
`;

const MessageContent = styled.div<{ isOwner: boolean; isEdited: boolean; }>`
  display: flex;
  background: ${props =>
    props.isEdited ? theme.colors.success :
      props.isOwner ? theme.colors.primary : '#f1f1f1'};
  border-radius: 12px;
  padding: 8px 16px;
  position: relative;

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
  const [showPopup, setShowPopup] = useState<string | null>(null);
  const editedComment = useSelector((state: RootState) => state.chat.editingComment);

  return (
    <MessageContainer>
      {comments.map((message, index) => {
        const isEdited = editedComment?.id === message.id;
        return (
          <SingleMessage key={message.id} isRight={isOwner}>
            <AvatarWrapper isRight={isOwner}>
              {!isOwner && index === 0 && <Avatar src={avatar} />}
            </AvatarWrapper>
            <MessageContent isOwner={isOwner} isEdited={editedComment?.id === message.id}>
              <p>{message.text}</p>
              {(isOwner && !isEdited) && <Control
                message={message}
                isOwner={isOwner}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
              />}
            </MessageContent>
            <AvatarWrapper isRight={isOwner}>
              {isOwner && index === 0 && <Avatar src={avatar} />}
            </AvatarWrapper>
          </SingleMessage>
        );
      }
      )}
    </MessageContainer>
  );
};
