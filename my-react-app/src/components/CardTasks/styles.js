import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 60vh;
`;

export const Card = styled.div`
  box-sizing: border-box;
  background-color: #afafaf;
  width: 90%;
  margin: 8px auto;
  padding: 4px 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 16px;
  }
`;
