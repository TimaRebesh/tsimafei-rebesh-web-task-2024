import { Preloader } from "ui/preloader";
import styled from "@emotion/styled";
import { Comment, MessageData } from "types/types";

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 32px;
  width: 100%;
  height: 100%;
`;

const NoneComments = styled.div`
  width: 100%;
  height: 100%;
`;

export const ConversationView = ({ comments }: { comments: Comment[] | null; }) => {

  if (!comments)
    return <NoneComments><Preloader /></NoneComments>;
  return (
    <ViewContainer>ConversationView</ViewContainer>
  );
};
