import styled from "styled-components";

type Props = {
  width?: string,
  margin?: string
}

export const Column = styled.div<Props>`
  width: ${({width})=> width ? width : 'auto'};
  margin: ${({margin})=> margin ? margin : '0'};
  display: flex;
  flex-direction: column;
`;