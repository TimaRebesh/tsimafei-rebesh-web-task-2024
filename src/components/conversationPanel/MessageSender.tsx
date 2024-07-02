/** @jsxImportSource @emotion/react */
import { EDIT_COMMENT_REQUEST, SEND_COMMENT } from 'store/constants';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import theme from 'styles/theme';
import { Icon } from 'ui/Icon';
import { currentUser } from 'utils/mockData';
import { RootState } from 'store/reducers/rootReducer';
import { truncate } from 'utils/utils';
import { css } from '@emotion/react';
import { setEditingComment } from 'store/reducers/chatReducer';

const MessageSenderContainer = styled.div<{ edit: boolean; }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 24px;
  width: 100%;
  height: ${props => (props.edit ? '140px' : '96px')};
`;

const SenderInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EditHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  background: #FFF5F5;
  border-radius: 10px 10px 0 0;
  padding: 6px 10px;

  p {
    margin: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #E53E3E;
  }
`;

const SenderInput = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  width: 100%;
  height: 48px;
  background: #FFFFFF;
  border: 2px solid #E2E8F0;
  border-radius: 12px;
`;

const MessageInput = styled.input`
  margin: 0 auto;
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  border: none;
  outline: none;
`;

export const MessageSender = () => {
  const [text, setText] = useState('');
  const editedComment = useSelector((state: RootState) => state.chat.editingComment);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editedComment) {
      setText(editedComment.text);
    }
  }, [editedComment]);

  const send = () => {
    if (text.trim()) {
      const userName = currentUser.name;
      if (editedComment) {
        dispatch({ type: EDIT_COMMENT_REQUEST, payload: { id: editedComment.id, name: userName, text } });
      } else {
        dispatch({ type: SEND_COMMENT, payload: { name: userName, text } });
      }
      setText('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      send();
    }
  };

  const clip = () => console.log('clip');

  const clearEdit = () => {
    setText('');
    dispatch(setEditingComment(null));
  };

  return (
    <MessageSenderContainer edit={!!editedComment}>
      <Icon
        src='assets/icons/paperclip.svg'
        width={24}
        height={24}
        onClick={clip}
      />
      <SenderInputWrapper>
        {editedComment && (
          <EditHeader>
            <p>Edit Message: {truncate(editedComment.text, 20)}</p>
            <Icon
              src='assets/icons/close.svg'
              width={16}
              height={16}
              onClick={clearEdit}
              backgroundColor='black'
              styles={css`cursor: pointer;`}
            />
          </EditHeader>
        )}
        <SenderInput>
          <MessageInput
            type="text"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message"
          />
          <Icon
            src='assets/icons/send2.svg'
            onClick={send}
            backgroundColor={theme.colors.primary}
          />
        </SenderInput>
      </SenderInputWrapper>
    </MessageSenderContainer>
  );
};
