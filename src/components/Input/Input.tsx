import styled from "styled-components";

type Props = {
  flex?: string,
  height?: string,
}

export const Input = styled.input<Props>`
  height: ${({height}) => height ? height : 'auto'};

  background-color: transparent;
  padding: 10px;
  border-bottom: 2px solid rgb( ${({theme}) => theme.colors.secondary}, 0.2);
  color: rgb( ${({theme}) => theme.colors.text});
  outline: none;
  flex: ${({flex}) => flex ? flex : 'auto'};

  &::placeholder{
    color: rgb( ${({theme}) => theme.colors.text}, 0.2);
  }

  &:focus{
    border-bottom: 2px solid rgb( ${({theme}) => theme.colors.secondary});
  }
`;