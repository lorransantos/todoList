import React from "react";
import CardTasks from "../CardTasks/CardTasks";
import { ContainerTasks, Title, BodyTasks } from "./styles";

const Tasks = () => {
  return (
    <ContainerTasks>
      <Title>
        <h1>Tarefas</h1>
      </Title>
      <BodyTasks>
        <CardTasks />
      </BodyTasks>
    </ContainerTasks>
  );
};

export default Tasks;
