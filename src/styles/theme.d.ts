import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      textPrimary: string;
      textSecondary: string;
      selected: string;
      success: string;
      backgroundSecondary: string;
      redColor: string;
      greenColor: string;
      blueColor: string;
      purpleColor: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
