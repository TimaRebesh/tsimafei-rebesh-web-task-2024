import { Icon } from 'ui/Icon';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const Header = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
height: 89px;
`;

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px;
gap: 10px;
width: 100%;
height: 88px;
`;

const Control = styled.div`
display: flex;
align-items: center;
gap: 10px;
height: 30px;
`;

const MessagesSwitcher = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 6px;
width: 121px;
height: 30px;
`;

const MessagesSwitcherText = styled.div`
width: 99px;
height: 30px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 150%;
`;

const MessagesIndicator = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 2px 8px;
gap: 10px;
width: 30px;
height: 22px;
background: #EDF2F7;
border-radius: 24px;
  span {
    width: 14px;
    height: 18px;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
  }
`;


export const MessagesHeader = () => {
  return (
    <Header>
      <Content>
        <Control>
          <MessagesSwitcher >
            <MessagesSwitcherText>Messages</MessagesSwitcherText>
            <Icon src='assets/icons/arrowdown2.svg' width={16} height={16} />
          </MessagesSwitcher>
          <MessagesIndicator><span>12</span></MessagesIndicator>
        </Control>
        <Icon
          src='assets/icons/addcircle.svg'
          width={40}
          height={40}
          backgroundColor={theme.colors.primary}
        />
      </Content>
    </Header>
  );
};
