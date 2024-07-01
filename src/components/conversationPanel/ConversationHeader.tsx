import styled from '@emotion/styled';

const PanelHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  width: 640px;
  height: 80px;
`;

const UserContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  width: 240px;
  height: 43px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: url(.png);
  border-radius: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 184px;
  height: 43px;
`;

const UserName = styled.div`
  width: 184px;
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
`;

const CallIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #615ef0;
`;

const CallText = styled.div`
  width: 30px;
  height: 20px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  color: #615ef0;
`;

export const ConversationHeader = () => {
  return (
    <PanelHeaderContainer>
      <UserContent>
        <UserAvatar />
        <UserInfo>
          <UserName>Florencio Dorrance</UserName>
          <UserStatus>
            <StatusIndicator />
            <StatusText>Online</StatusText>
          </UserStatus>
        </UserInfo>
      </UserContent>
      <CallButton>
        <CallIcon />
        <CallText>Call</CallText>
      </CallButton>
    </PanelHeaderContainer>
  );
};
