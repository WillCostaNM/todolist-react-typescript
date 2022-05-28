import styled from "styled-components";

type Props = {
  toggleTheme(): void,
  theme: string
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #cc9797;
  padding: 16px;
  margin-bottom: 20px;
`;

const Options = styled.div`
  
`;

const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

const Button = styled.button`
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
`;


export const Header: React.FC<Props> = ({toggleTheme, theme}) => {
  return<>
    <Container>
      <Logo>Todo</Logo>

      <Options>
        <Button theme={theme} onClick={toggleTheme} />
      </Options>
    </Container>
  </>
}


