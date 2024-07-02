/** @jsxImportSource @emotion/react */
import { MessagesPanel } from '../messagesPanel/MessagePanel';
import { Divider } from 'ui/divider';
import { ConversationPanel } from '../conversationPanel/ConversationPanel';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import { useEffect } from 'react';
import { fetchComments } from 'store/actions/chatActions';
import { Preloader } from 'ui/preloader';
import { DirectoryPanel } from '../directory-panel/DirectoryPanel';

const NoneConversation = styled.div`
  background-color: ${theme.colors.secondary};
  width: 100%;
`;


const ChatPanel: React.FC = () => {

  const selectedMessage = useSelector((state: RootState) => state.selectedMessage.selectedMessage);
  const comments = useSelector((state: RootState) => state.chat.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  if (!comments)
    return <Preloader />;

  return (
    <>
      <MessagesPanel />
      <Divider vertical />
      {selectedMessage
        ? <ConversationPanel message={selectedMessage} />
        : <NoneConversation />
      }
      <Divider vertical />
      <DirectoryPanel />
    </>
  );
};

export default ChatPanel;
