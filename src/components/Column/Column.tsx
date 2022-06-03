import styled from "styled-components";

type Props = {
  width?: string,
  margin?: string,
  padding?: string,
  backgroundColor?: string,
  borderWidth?: string,
  borderStyle?: string,
  borderColor?: string,


  // Border
  border?: string,
  borderTop?: string,
  borderLeft?: string
  borderRight?: string,
  borderBottom?: string,
  borderRadius?: string,
}

export const Column = styled.div<Props>`
  width: ${({width})=> width ? width : 'auto'};
  margin: ${({margin})=> margin ? margin : '0'};
  padding: ${({padding})=> padding ? padding : '0'};
  border-radius: ${({borderRadius})=> borderRadius ? borderRadius : '0'};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};
  display: flex;
  flex-direction: column;

  border-top: ${({borderTop})=> borderTop ? borderTop : ''};
  border-right: ${({borderRight})=> borderRight ? borderRight : ''};
  border-bottom: ${({borderBottom})=> borderBottom ? borderBottom : ''};
  border-left: ${({borderLeft})=> (borderLeft ? borderLeft : '') };
`;
