import { Avatar } from 'ui/avatar';
import styled from '@emotion/styled';
import { MessageData } from 'types/types';
import { CustomLabel } from 'ui/label';
import theme from 'styles/theme';
import { useDispatch } from 'react-redux';
import { selectMessage } from 'store/actions/messagesActions';

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

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(selectMessage(message));
  };

  return (
    <MessageContainer onClick={onClick}>
      <Avatar src={message.user.avatar} />
      <MessageContent>
        <NameContainer>
          <span>{message.user.name}</span>
          <Time>{message.lastMessage.date}</Time>
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
