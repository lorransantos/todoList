import Tasks from "./components/Tasks/Tasks.jsx";
import GlobalStyle from "./globalStyles.js";
import {
  Container,
  Header,
  CreateTasksContainer,
  ContainerTasks,
} from "./style.js";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>ToDo List</h1>
      </Header>
      <Container>
        <CreateTasksContainer>
          <h2>Nova tarefa</h2>
        </CreateTasksContainer>
        {/* <ContainerTasks>
          <h2>Tarefas</h2>
        </ContainerTasks> */}
        <Tasks />
      </Container>
    </>
  );
};

export default App;
