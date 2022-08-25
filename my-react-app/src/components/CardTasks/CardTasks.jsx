import React, { useContext, useState } from "react";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { GlobalContext } from "../../global/GlobalContext";
import { Container, Card } from "./styles";

const CardTasks = () => {
  const { list, setList } = useContext(GlobalContext);

  const alterStatus = (id, status) => {
    const newList = [...list];
    const test = newList.map((item) => {
      if (id === item.id) {
        item.status = !item.status;
      }
      return item;
    });
    setList(test);
    console.log(list);
  };
  console.log(list);

  return (
    <>
      <Container>
        {list.map((item) => (
          <Card
            test={item.status}
            onClick={() => alterStatus(item.id, item.status)}
            key={item.id}
          >
            <div>
              <h3>Título</h3>
              <p>{item.title}</p>
              <h3>Descrção</h3>
              <p>{item.description}</p>
              <p>{item.status}</p>
            </div>
            {item.status ? (
              <BsXCircleFill size={"20px"} />
            ) : (
              <BsFillCheckCircleFill size={"20px"} />
            )}
          </Card>
        ))}
      </Container>
    </>
  );
};

export default CardTasks;
