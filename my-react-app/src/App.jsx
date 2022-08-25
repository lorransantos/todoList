import Tasks from "./components/Tasks/Tasks.jsx";
import GlobalStyle from "./globalStyles.js";
import {
  Container,
  Header,
  CreateTasksContainer,
  ContainerTasks,
} from "./style.js";

import { CreateTask } from "./components/CreatTask/CreateTask";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>ToDo List</h1>
      </Header>
      <Container>
        <CreateTasksContainer>
          <CreateTask/>
        </CreateTasksContainer>
        <Tasks />
    </Container>
     </>

  );
};

export default App;
