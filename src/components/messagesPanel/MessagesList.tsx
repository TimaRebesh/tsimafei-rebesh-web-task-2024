import styled from '@emotion/styled';
import { MessagesSearch } from './MessagesSearch';
import { Message } from './Message';
import { messagesData } from '../../utils/mockData';
import { Preloader } from 'ui/preloader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/reducers/rootReducer';
import { useEffect } from 'react';
import { selectMessage } from 'store/actions/messagesActions';
import { MessageData } from 'types/types';

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

  const data = messagesData;
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.chat.comments);
  const selectedMessage = useSelector((state: RootState) => state.selectedMessage.selectedMessage);

  const select = (message: MessageData) => {
    dispatch(selectMessage(message));
  };

  useEffect(() => {
    select(data[0]);
  }, [comments, data]);

  if (!data)
    return <Preloader />;

  return (
    <Container>
      <MessagesSearch />
      <MessageListComponent>
        {data.map((message) => (
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
