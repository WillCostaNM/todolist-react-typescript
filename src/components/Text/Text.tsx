import styled from "styled-components";

type Props = {
  fontSize?: string,
}

export const Text = styled.p<Props>`
  font-size: ${({fontSize}) => fontSize ? fontSize : ''};
  color: rgb(${({theme}) => theme.colors.text});
  font-weight: bold;
`;
