import styled from "styled-components";

type Props = {
  fontSize?: string,
  fontWeight?: string
}

export const Text = styled.p<Props>`
  font-size: ${({fontSize}) => fontSize ? fontSize : ''};
  color: rgb(${({theme}) => theme.colors.text});
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'bold'};
`;
