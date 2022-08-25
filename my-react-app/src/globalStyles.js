import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }

  input,button,textArea{
    border-radius: 5px;
    border: none;
    resize: none;
  }
`;

export default GlobalStyle;
