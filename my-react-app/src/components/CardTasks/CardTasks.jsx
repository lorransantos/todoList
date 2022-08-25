import React, { useContext, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GlobalContext } from "../../global/GlobalContext";
import { Container, Card } from "./styles";

const CardTasks = () => {
  const { list, setList } = useContext(GlobalContext);

  const alterStatus = (id) => {
    let test = list.map((item) => {
      if (id === item.id) {
        item.status === true;
      }
    });
    setList(test);
    console.log(test);
  };

  return (
    <>
      <Container>
        {list.map((item) => (
          <Card onClick={() => alterStatus()} key={item.id}>
            <div>
              <h3>Título</h3>
              <p>{item.title}</p>
              <h3>Descrção</h3>
              <p>{item.description}</p>
              <p>{item.status}</p>
            </div>
            <BsFillCheckCircleFill size={"20px"} />
          </Card>
        ))}
      </Container>
    </>
  );
};

export default CardTasks;
