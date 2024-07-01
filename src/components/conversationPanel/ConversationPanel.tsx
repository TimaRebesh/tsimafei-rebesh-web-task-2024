import { Message } from "types/types";
import styled from '@emotion/styled';
import { ConversationHeader } from './ConversationHeader';

export interface ConversationProps {
  messages: Message[];
}

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  width: 640px;
  height: 1024px;
  background: #ffffff;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 640px;
  height: 774px;
`;

const Divider = styled.div`
  width: 640px;
  height: 1px;
  background: #000000;
  opacity: 0.08;
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 32px;
  width: 640px;
  height: 693px;
`;

const MessageItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  background: #f1f1f1;
  border-radius: 12px;
  width: fit-content;
`;

const MessageText = styled.div`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 24px;
  width: 640px;
  height: 96px;
`;

const MessageInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  width: 544px;
  height: 48px;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  opacity: 0.4;
`;

const SendMessageButton = styled.button`
  width: 24px;
  height: 24px;
  background: #615ef0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const ConversationPanel: React.FC<ConversationProps> = ({ messages }) => {
  return (
    <PanelContainer>
      <TopContent>
        <ConversationHeader />
        <Divider />
        <MessageList>
          {messages.map((message) => (
            <MessageItem key={message.id}>
              <MessageText>{message.text}</MessageText>
            </MessageItem>
          ))}
        </MessageList>
      </TopContent>
      <MessageBox>
        <MessageInput placeholder="Type a message" />
        <SendMessageButton />
      </MessageBox>
    </PanelContainer>
  );
};