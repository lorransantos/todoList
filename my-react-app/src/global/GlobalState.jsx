import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  const [list, setList] = useState([]);

  return (
    <div>
      <GlobalContext.Provider value={{ list, setList }}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};
export default GlobalState;
