import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  margin: 0px auto;
  padding: 0px;
  background-color: #555555;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  position: absolute;
  top: 0px;
  width: 100%;
  background-color: #d9d9d9;
  h1 {
    font-size: 20px;
    padding: 16px;
  }
`;
export const Content = styled.main`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const CreateTasksContainer = styled.div`
  width: 40%;
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
