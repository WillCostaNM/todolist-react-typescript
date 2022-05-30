import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import {dark} from "./mode";
import {light} from "./mode";

// Components
import { Header } from "components";

export type ThemeType = typeof dark;

type Props ={
  children?: React.ReactNode;
}

export const Theme: React.FC<Props> = ({children}) => {

  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title == 'dark' ? light : dark);
  }

  return(
    <ThemeProvider theme={theme}>
      <Header themeName={theme.title} toggleTheme={toggleTheme}/>
      {children}
    </ThemeProvider>
  )
}
