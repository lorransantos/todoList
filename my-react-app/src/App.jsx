import Tasks from "./components/Tasks/Tasks.jsx";
import GlobalStyle from "./globalStyles.js";
import { Container, Header, CreateTasksContainer, Content } from "./style.js";

import { CreateTask } from "./components/CreatTask/CreateTask";
import GlobalState from "./global/GlobalState.jsx";

const App = () => {
  return (
    <GlobalState>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>ToDo List</h1>
        </Header>
        <Content>
          <CreateTasksContainer>
            <CreateTask />
          </CreateTasksContainer>
          <Tasks />
        </Content>
      </Container>
    </GlobalState>
  );
};

export default App;
