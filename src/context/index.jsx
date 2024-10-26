import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchObj, setSearchObj] = useState({});
  return (
    <GlobalContext.Provider
      value={{
        searchObj, setSearchObj
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;