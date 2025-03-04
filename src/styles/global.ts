import { css } from '@emotion/react';
import theme from './theme';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Asap:wght@400;700&family=Inter:wght@400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.textPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;

export default globalStyles;
