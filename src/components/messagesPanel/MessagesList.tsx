import styled from '@emotion/styled';
import { MessagesSearch } from './MessagesSearch';
import { Message } from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/reducers/rootReducer';
import { useEffect, useState } from 'react';
import { selectMessage } from 'store/actions/messagesActions';
import { MessageData } from 'types/types';
import { getMessagesData } from 'utils/utils';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
height: 100%;
`;

const MessageListComponent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 16px;
gap: 8px;
width: 100%;
`;

export const MessageList = () => {

  const [updatedData, setUpdatedData] = useState<MessageData[] | null>(null);
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.chat.comments);
  const selectedMessage = useSelector((state: RootState) => state.selectedMessage.selectedMessage);

  const select = (message: MessageData) => {
    dispatch(selectMessage(message));
  };

  useEffect(() => {
    if (comments) {
      const data = getMessagesData(comments);
      select(data[0]);
      setUpdatedData(data);
    }
  }, [comments]);

  if (!updatedData)
    return null;

  return (
    <Container>
      <MessagesSearch />
      <MessageListComponent>
        {updatedData.map((message) => (
          <Message
            key={message.id}
            message={message}
            isActive={selectedMessage && message.id === selectedMessage.id}
            select={select}
          />
        ))}
      </MessageListComponent>
    </Container>
  );
};
