import { Icon } from 'ui/Icon';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import { css } from '@emotion/react';

const Header = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 100%;
height: 89px;

flex: none;
order: 0;
flex-grow: 0;

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

flex: none;
order: 0;
flex-grow: 0;
`;

const Frame1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 10px;

margin: 0 auto;
width: 161px;
height: 30px;


flex: none;
order: 0;
flex-grow: 0;
`;

const Icon2 = styled.div`
margin: 0 auto;
width: 40px;
height: 40px;
flex: none;
order: 1;
flex-grow: 0;
`;




export const MessagesHeader = () => {
  return (
    <Header>
      <Content>
        <Frame1></Frame1>
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
