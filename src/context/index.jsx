import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchObj, setSearchObj] = useState({});
  const [latestJobs, setLatestJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        searchObj,
        setSearchObj,
        latestJobs,
        setLatestJobs,
        allJobs,
        setAllJobs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
