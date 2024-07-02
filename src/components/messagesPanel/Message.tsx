import { Avatar } from 'ui/avatar';
import styled from '@emotion/styled';
import { MessageData } from 'types/types';
import { CustomLabel } from 'ui/label';
import theme from 'styles/theme';
import { getTransformedData } from 'utils/utils';

const MessageContainer = styled.div<{ isActive: boolean; }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 12px;
  gap: 16px;
  border-radius: 12px;
  cursor: pointer;
  background: ${({ isActive }) => isActive ? theme.colors.selected : 'inherit'};
  &:hover {
    background: ${theme.colors.selected}
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Time = styled.span`
  font-weight: 600;
  font-size: 14px;
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
  margin-top: 10px;
  gap: 8px;
  height: 22px;
`;

interface MessageProps {
  message: MessageData;
  isActive: boolean;
  select: (message: MessageData) => void;
}

export const Message: React.FC<MessageProps> = ({ message, isActive, select }) => {

  const onClick = () => select(message);

  return (
    <MessageContainer isActive={isActive} onClick={onClick}>
      <Avatar src={message.user.avatar} />
      <MessageContent>
        <NameContainer>
          <h4>{message.user.name}</h4>
          <Time>{getTransformedData(message.lastMessage.date)}</Time>
        </NameContainer>
        <MessageText>{message.lastMessage.text}</MessageText>
        <LabelsContainer>
          {message.labels.map((label, index) => {
            return <CustomLabel key={index} text={label.text} type={label.type} />;
          })}
        </LabelsContainer>
      </MessageContent>
    </MessageContainer>
  );
};
