import { Avatar } from 'ui/avatar';
import styled from '@emotion/styled';
import { MessageData } from 'types/types';
import { CustomLabel } from 'ui/label';
import theme from 'styles/theme';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 12px;
  gap: 16px;
  border-radius: 12px;
  &:hover {
    background: ${theme.colors.selected}
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #000;
`;

const Time = styled.span`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #000;
  opacity: 0.3;
`;

const MessageText = styled.div`
  height: 18px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.4);
`;

const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  height: 22px;
`;

interface MessageProps {
  message: MessageData;
}

export const Message: React.FC<MessageProps> = ({ message }) => {

  // const data = JSON.parse('[{"name":"Tim","text":"Hello","id":"b40ce360-1af4-4df0-8b2d-d29b0865f15e","dateAdded":1573961291493,"dateEdited":1574224441310}]');
  // console.log(data);

  const onClick = () => {
    console.log(message.id);
  };

  return (
    <MessageContainer onClick={onClick}>
      <Avatar src={message.user.avatar} />
      <MessageContent>
        <NameContainer>
          <span>Full name here</span>
          <Time>12m</Time>
        </NameContainer>
        <MessageText>Enter your message here</MessageText>
        <LabelsContainer>
          {message.labels.map((label, index) => {
            return <CustomLabel key={index} text={label.text} type={label.type} />;
          })}
        </LabelsContainer>
      </MessageContent>
    </MessageContainer>
  );
};
