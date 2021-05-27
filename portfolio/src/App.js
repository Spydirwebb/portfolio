import styled from 'styled-components'
//components
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <AppStyled>
      <Sidebar />
    </AppStyled>
  );
}

const AppStyled = styled.div`
    background-color: red;
`;
export default App;
