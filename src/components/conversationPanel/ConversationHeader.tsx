import { IUser } from 'types/types';
import { Avatar } from 'ui/avatar';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: 80px;
`;


const UserContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  width: 100%;
  height: 43px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 100%;
  height: 43px;
`;

const UserName = styled.div`
  width: 100%;
  height: 25px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 20px;
  color: #000000;
`;

const UserStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 8px;
  width: 56px;
  height: 18px;
`;

const StatusIndicator = styled.div`
  width: 10px;
  height: 10px;
  background: #68d391;
  border-radius: 50%;
`;

const StatusText = styled.div`
  width: 38px;
  height: 18px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  color: #000000;
  opacity: 0.6;
`;

const CallButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
  width: 94px;
  height: 44px;
  background: rgba(97, 94, 240, 0.1);
  border-radius: 8px;
  cursor: pointer;
`;

const CallIcon = styled.div`
  width: 24px;
  height: 24px;
  background: ${theme.colors.primary};
  mask-image: url(assets/icons/call.svg);
`;

const CallText = styled.div`
  width: 30px;
  height: 20px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  color: ${theme.colors.primary};
`;

export const ConversationHeader = ({ user }: { user: IUser; }) => {

  const onCall = () => { console.log('calling'); };

  return (
    <HeaderContainer>
      <UserContent>
        <Avatar src={user.avatar} />
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserStatus >
            <StatusIndicator />
            <StatusText>Online</StatusText>
          </UserStatus>
        </UserInfo>
      </UserContent>
      <CallButton onClick={onCall}>
        <CallIcon />
        <CallText>Call</CallText>
      </CallButton>
    </HeaderContainer >
  );
};
