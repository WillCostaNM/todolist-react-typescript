import 'styled-components';
import{ CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    fontSizes: {
        body: number,
        bodyLarge: number 
        bodyExtraLarge: number,
        displayExtraLarge: number
    },
    colors: {
        primary: string,
        secondary: string,
        tertiary: string,
        text: string
    }
  }
}
