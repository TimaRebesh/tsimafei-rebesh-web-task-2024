import { Icon } from 'ui/Icon';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from 'styles/theme';
import { Divider } from 'ui/divider';

const HeaderContainer = styled.div`
 width: 100%;
  height: 80px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  height: 80px;
`;

export const DirectoryHeader = () => {
  return (
    <HeaderContainer>
      <Content >
        <h2>Directory</h2>
        <Icon
          src='assets/icons/morecircle.svg'
          styles={css`
          transform: rotate(90deg);
          cursor: pointer;
            background: ${theme.colors.primary};
        `}
          width={40}
          height={40}
        />
      </Content>
      <Divider />
    </HeaderContainer>
  );
};
