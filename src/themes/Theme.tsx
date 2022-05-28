import React from "react";
import { ThemeProvider } from "styled-components";

const fontSizes = {
  body: 14,
  bodyExtraLarge: 20,
  displayExtraLarge: 96
};

const theme = {
  fontSizes,
  colors: {
    primary: '#5946D2',
    secondary: '#F9B531'
  }
};

const themeDark = {
  fontSizes,
  colors: {
    primary: '#2567B4',
    secondary: '#F9B531'
  }
};

export type ThemeType = typeof theme;

type Props ={
  children?: React.ReactNode;
}

export const Theme: React.FC<Props> = ({children}) => {
  return(
    <ThemeProvider theme={themeDark}>{children}</ThemeProvider>
  )
}
