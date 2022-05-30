import styled from "styled-components";

export const ConfirmButton = styled.button`
  &&{
    height: 40px;
    border-radius: 0;
    color: rgb(${({theme}) => theme.colors.secondary});
    font-weight: normal;
    background-color: transparent;
    border-bottom: 2px solid rgba(${({theme}) => theme.colors.secondary}, 0.2) ;
    padding: 10px 20px;
    cursor: pointer;
  }
`;
