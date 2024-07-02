/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'ui/Icon';
import theme from 'styles/theme';
import { css } from '@emotion/react';
import { Popup } from 'ui/popup';
import { Comment } from 'types/types';
import { RootState } from 'store/reducers/rootReducer';
import { deleteCommentRequest } from 'store/actions/chatActions';
import styled from '@emotion/styled';
import { PreloaderCircle } from 'ui/preloader-circle';

const ControlContainer = styled.div`
  position: relative;
`;

const PopupItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

interface ControlProps {
  message: Comment;
  isOwner: boolean;
  showPopup: string | null;
  setShowPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Control: React.FC<ControlProps> = ({
  message,
  isOwner,
  showPopup,
  setShowPopup,
}) => {
  const dispatch = useDispatch();
  const isPending = useSelector((state: RootState) =>
    state.chat.pendingDeleteComments.includes(message.id)
  );

  const handleIconClick = () => {
    setShowPopup(message.id);
  };

  const handleDelete = () => {
    dispatch(deleteCommentRequest(message.id));
    setShowPopup(null);
  };

  return (
    <ControlContainer>
      {isPending ? (
        <PreloaderCircle />
      ) : (
        <Icon
          src='assets/icons/morecircle.svg'
          backgroundColor={isOwner ? theme.colors.secondary : theme.colors.primary}
          styles={css`
            transform: rotate(90deg);
            margin-left: 10px;
            opacity: 0.7;
            cursor: pointer;
            &:hover {
              opacity: 1;
            }
          `}
          onClick={handleIconClick}
        />
      )}
      {showPopup === message.id && (
        <Popup onClose={() => setShowPopup(null)}>
          <PopupItem>Edit</PopupItem>
          <PopupItem onClick={handleDelete}>Delete</PopupItem>
        </Popup>
      )}
    </ControlContainer>
  );
};
