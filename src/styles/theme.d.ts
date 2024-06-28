import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      textPrimary: string;
      textSecondary: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
