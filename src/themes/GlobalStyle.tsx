import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

  *{
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }

  body{
    background-color: ${({theme}) => theme.colors.primary}
  }
 
`;