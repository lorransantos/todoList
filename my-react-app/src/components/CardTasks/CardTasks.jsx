import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Container, Card } from "./styles";

const CardTasks = () => {
  const [items, setItems] = useState([
    { title: "teste", description: "Terminar esse Freela" },
    { title: "teste", description: "Terminar esse Freela" },
    { title: "teste", description: "Terminar esse Freela" },
    { title: "teste", description: "Terminar esse Freela" },
    { title: "teste", description: "Terminar esse Freela" },
    { title: "teste", description: "Terminar esse Freela" },
    { title: "teste", description: "Terminar esse Freela" },
    { title: "teste", description: "Terminar esse Freela" },
    { title: "teste", description: "Terminar esse Freela" },
  ]);
  return (
    <>
      <Container>
        {items.map((item) => (
          <Card>
            <div>
              <h3>Título</h3>
              <p>{item.title}</p>
              <h3>Descrção</h3>
              <p>{item.description}</p>
            </div>
            <BsFillCheckCircleFill size={'20px'} />
          </Card>
        ))}
      </Container>
    </>
  );
};

export default CardTasks;
