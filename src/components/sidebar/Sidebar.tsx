/** @jsxImportSource @emotion/react */
import React from 'react';
import { sidebarStyles, logoStyles, iconContainerStyles, } from './sidebar.styles';
import Icon from '../../ui/Icon';

const Sidebar: React.FC = () => {
  return (
    <div css={sidebarStyles}>
      <div css={logoStyles} />
      <div css={iconContainerStyles}>
        <Icon src='assets/icons/home2.svg' />
        <Icon src='assets/icons/message.svg' />
        <Icon src='assets/icons/calendar2.svg' />
        <Icon src='assets/icons/chart21.svg' />
        <Icon src='assets/icons/searchnormal1.svg' />
      </div>
      <div >
        <Icon src='assets/icons/setting2.svg' />
      </div>
    </div>
  );
};

export default Sidebar;
