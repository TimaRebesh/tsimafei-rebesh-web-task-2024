/** @jsxImportSource @emotion/react */
import React from 'react';
import { directoryPanelStyles } from './directoryPanel.styles';

const DirectoryPanel: React.FC = () => {
  return (
    <div css={directoryPanelStyles}>
      {/* Содержимое DirectoryPanel */}
      <h2>Directory</h2>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        {/* Добавьте больше пользователей или элементов директории по необходимости */}
      </ul>
    </div>
  );
};

export default DirectoryPanel;
