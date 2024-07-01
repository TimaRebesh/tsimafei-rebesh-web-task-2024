import styled from '@emotion/styled';
import { MessagesSearch } from './MessagesSearch';
import { Message } from './Message';
import { messagesData } from './mockData';
import { Preloader } from 'ui/preloader';

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

  if (!data)
    return <Preloader />;

  return (
    <Container>
      <MessagesSearch />
      <MessageListComponent>
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </MessageListComponent>
    </Container>
  );
};
