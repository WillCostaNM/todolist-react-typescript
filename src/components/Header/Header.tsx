import styled from "styled-components";

type Props = {
  toggleTheme(): void,
  themeName: string,
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
  background-color: ${props => props.theme.title === 'dark' ? 'black' : 'white'};
  height: 25px;
  width:  25px;
  border-radius: 50%;
  cursor: pointer;
`;

const Alerts = styled.button`
  height: 25px;
  width:  25px;
  margin-right: 16px;
`;

export const Header: React.FC<Props> = ({toggleTheme, themeName}) => {
  return<>
    <Container>
      <Logo>Todo</Logo>

      <Options>
        <Alerts/>
        <Button onClick={toggleTheme} />
      </Options>
    </Container>
  </>
}


