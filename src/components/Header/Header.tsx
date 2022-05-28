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
  border: 1px solid #555;
  display: flex;
`;

const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

const Button = styled.button`
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  height: 25px;
  width:  25px;
  border-radius: 50%;
  cursor: pointer;
`;

const Alertas = styled.button`
  height: 25px;
  width:  25px;
  margin-right: 16px;
`;

export const Header: React.FC<Props> = ({toggleTheme, theme}) => {
  return<>
    <Container>
      <Logo>Todo</Logo>

      <Options>
        <Alertas/>
        <Button theme={theme} onClick={toggleTheme} />
      </Options>
    </Container>
  </>
}


