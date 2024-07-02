import { Preloader } from "ui/preloader";
import styled from "@emotion/styled";
import { Comment, IUser, TransformedComments } from "types/types";
import { Message } from "./Message";
import { currentUser } from "utils/mockData";
import { useEffect, useState } from "react";
import { transformCommentsToFitData } from "utils/utils";

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 32px;
  width: 100%;
  height: 100%;
`;

const NoMessages = styled.p`
 opacity: 0.5;
`;

const NoneComments = styled.div`
  width: 100%;
  height: 100%;
`;


export const ConversationView = ({
  comments,
  sender
}: {
  comments: Comment[] | null;
  sender: IUser;
}) => {

  const [preparedMessages, setPreparedMessages] = useState<TransformedComments[] | null>(null);

  useEffect(() => {
    if (comments) {
      setPreparedMessages(transformCommentsToFitData(comments));
    }
  }, [comments]);

  if (!preparedMessages)
    return (
      <NoneComments>
        <Preloader />
      </NoneComments>
    );

  if (!comments || sender.name !== comments[0].name)
    return <ViewContainer>
      <NoMessages>no messages</NoMessages>
    </ViewContainer>;


  return (
    <ViewContainer>
      {preparedMessages.map((messageBlock) => (
        <Message
          key={messageBlock.name}
          messageBlock={messageBlock}
        />
      ))}
    </ViewContainer>
  );
};
