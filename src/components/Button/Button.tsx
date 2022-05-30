import styled from "styled-components";


type Props = {
  width?: string,
  height?: string,
  padding?: string,
  fontSize?: string,
  fontWeight?: string,
  shouldHover?: boolean,
  shouldClear?: boolean,
  
  // Color
  fontColor?: string,
  backgroundColor?: string,
  
  // Border
  border?: string,
  borderTop?: string,
  borderLeft?: string
  borderRight?: string,
  borderBottom?: string,
  borderRadius?: string,
}

export const Button = styled.button<Props>`

  background-color: ${({backgroundColor, theme}) => backgroundColor ? backgroundColor : theme.colors.tertiary};
  width:  ${({width}) => width ? width : 'auto'};
  height: ${({height}) => height ? height : 'auto'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'bold'};
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '4px'};
  padding: ${({padding}) => padding ? padding : '10px 20px'};
  color: ${({fontColor, theme}) => fontColor ? fontColor : theme.colors.primary};
  border: ${({border}) => border ? border : '1px solid transparent'};
  cursor: pointer;


  ${({shouldHover, shouldClear, theme, backgroundColor}) => shouldHover ? `

    &:hover{
      box-shadow: ${ shouldClear ? ' inset 0 0 0 10em rgba(255, 255, 255, 0.3)' : 'inset 0em 0em 0em 10em rgba(0, 0, 0, 0.1)'};
    }

    &:active{
      background-color: transparent;
      box-shadow: none;
      color: ${backgroundColor ? backgroundColor : theme.colors.tertiary};
      border: 1px solid ${backgroundColor ? backgroundColor : theme.colors.tertiary};
    }

  ` :  '' }
  
`;
