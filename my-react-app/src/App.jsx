import GlobalStyle from "./globalStyles.js";
import { Container, CreateTasksContainer } from "./style.js";

import { CreateTask } from "./components/CreatTask/CreateTask";


const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <CreateTasksContainer>
        <CreateTask/>
      </CreateTasksContainer>
      <div>
        <h1>Apresentação das tarefas</h1>
        
      </div>
    </Container>
  );
};

export default App;
