import GlobalStyle from "./globalStyles.js";
import { Container, CreateTasksContainer } from "./style.js";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <CreateTasksContainer>
        <h1>Criação de tarefa</h1>
      </CreateTasksContainer>
      <div>
        <h1>Apresentação das tarefas</h1>
      </div>
    </Container>
  );
};

export default App;
