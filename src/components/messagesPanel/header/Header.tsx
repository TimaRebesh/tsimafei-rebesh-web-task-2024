/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import headerStyles from './header.styles';

const Header: React.FC = () => {
  return (
    <div css={headerStyles.headerContainer}>
      <div css={headerStyles.userContent}>
        <img src="user-avatar.png" alt="User" css={headerStyles.avatar} />
        <div>
          <div css={headerStyles.userName}>Florencio Dorrance</div>
          <div css={headerStyles.userStatus}>
            <span css={headerStyles.statusDot} />
            Online
          </div>
        </div>
      </div>
      <button css={headerStyles.callButton}>Call</button>
    </div>
  );
};

export default Header;
