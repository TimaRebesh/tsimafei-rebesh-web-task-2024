import { Comment, MessageData } from "types/types";
import styled from '@emotion/styled';
import { ConversationHeader } from './ConversationHeader';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from 'store/actions/chatActions';
import { Divider } from "ui/divider";
import { RootState } from "store/reducers/rootReducer";
import { Preloader } from "ui/preloader";
import theme from "styles/theme";
import { ConversationView } from "./ConversationView";

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
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
  width: 100%;
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
  width: 100%;
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




export interface ConversationProps {
  message: MessageData;
}

export const ConversationPanel: React.FC<ConversationProps> = ({ message }) => {

  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.chat.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <PanelContainer>
      <ConversationHeader user={message.user} />
      <Divider />
      <ConversationView comments={comments} />
      <MessageBox>
        <MessageInput placeholder="Type a message" />
        <SendMessageButton />
      </MessageBox>
    </PanelContainer>
  );
};

