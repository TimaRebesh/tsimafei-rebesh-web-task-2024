import { MessageData } from "types/types";
import styled from '@emotion/styled';
import { ConversationHeader } from './ConversationHeader';
import { Divider } from "ui/divider";
import { RootState } from "store/reducers/rootReducer";
import { ConversationView } from "./ConversationView";
import { MessageSender } from "./MessageSender";
import { useSelector } from "react-redux";

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export interface ConversationProps {
  message: MessageData;
}

export const ConversationPanel: React.FC<ConversationProps> = ({ message }) => {

  const comments = useSelector((state: RootState) => state.chat.comments);

  return (
    <PanelContainer>
      <ConversationHeader user={message.user} />
      <Divider />
      <ConversationView comments={comments} sender={message.user} />
      <MessageSender />
    </PanelContainer>
  );
};

