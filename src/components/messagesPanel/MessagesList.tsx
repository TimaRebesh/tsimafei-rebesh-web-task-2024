import styled from '@emotion/styled';
import { MessagesSearch } from './MessagesSearch';
import { Message } from './Message';
import { messagesData } from '../../utils/mockData';
import { Preloader } from 'ui/preloader';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers/rootReducer';

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
  const selectedMessage = useSelector((state: RootState) => state.selectedMessage.selectedMessage);

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
          />
        ))}
      </MessageListComponent>
    </Container>
  );
};
