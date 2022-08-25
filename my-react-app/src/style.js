import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: space-around;
  margin: 0px auto;
  padding: 0px;
  background-color: #393939;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #cccccc;
  h1 {
    font-size: 20px;
  }
`;

export const CreateTasksContainer = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 100%;
  text-align: center;
  border-radius: 4px;
`;

export const ContainerTasks = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 100%;
  text-align: center;
  border-radius: 4px;
`;
