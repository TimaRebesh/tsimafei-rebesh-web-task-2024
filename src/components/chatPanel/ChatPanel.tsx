/** @jsxImportSource @emotion/react */
import { MessagesPanel } from '../messagesPanel/MessagePanel';
import { Divider } from 'ui/divider';
import { ConversationPanel } from '../conversationPanel/ConversationPanel';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const NoneConversation = styled.div`
background-color: ${theme.colors.secondary};
width: 100%;
`;


const ChatPanel: React.FC = () => {

  const selectedMessage = useSelector((state: RootState) => state.selectedMessage.selectedMessage);

  return (
    <>
      <MessagesPanel />
      <Divider vertical />
      {selectedMessage
        ? <ConversationPanel message={selectedMessage} />
        : <NoneConversation />
      }
      <Divider vertical />
      {/* <MessageList messages={messages} />
      <div css={chatInputStyles}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <button css={chatButtonStyles} onClick={handleSendMessage}>Отправить</button>
      </div> */}
    </>
  );
};

export default ChatPanel;
